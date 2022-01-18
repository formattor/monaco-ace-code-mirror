import { autoinject } from 'aurelia-framework';
import * as ace from 'ace-builds'
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/ext-language_tools'

@autoinject
export class Ace {
    public aceInstance;
    private text: string;
    private aceRef: HTMLDivElement;
    private modePath='ace/mode/javascript';

    constructor(
        // private materialService: MaterialService
    ) {
    }

    private attached(): void {
        this.createAce();
        var data=[
            {
                meta: "firstTips", 
                caption: "first", 
                value: "firstValue",
                score:1
            }
        ];
        this.setCompleteData(data);
    }

    private createAce() {
        this.aceInstance = ace.edit(this.aceRef, {
            value: `console.log("hello Ace");`,
            maxLines: 20,
            minLines: 10,
            mode: this.modePath,
            fontSize: 14,
            tabSize: 4
        });
        this.aceInstance.setTheme("ace/theme/monokai");
        this.aceInstance.setOptions({
            // enableSnippets: true,
            enableLiveAutocompletion: true,
            // enableBasicAutocompletion: true
        })
    }

    private setCompleteData(data) {
        var langTools = ace.require("ace/ext/language_tools");
        langTools.addCompleter({
            getCompletions: function(editor, session, pos, prefix, callback) {
                if (prefix.length === 0) {
                    return callback(null, []);
                } else {
                    return callback(null, data);
                }
            }
        });
    }
    
    private detached() {
        if(this.aceInstance){
            this.aceInstance.destroy();
            this.aceInstance.container.remove();
        }
    }
}