import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/sql/sql'
import 'codemirror/theme/monokai.css'
import 'codemirror/addon/selection/active-line'

// import 'codemirror/addon/lint/jshint'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/javascript-lint'

import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/sql-hint'
import 'codemirror/addon/edit/matchbrackets'

export class codemirror {
    public codemirrorInstance;
    private codeEl:HTMLDivElement;

    constructor() {
    }

    private attached(): void {
        this.createcodemirror();
    }

    private createcodemirror() {
        this.codemirrorInstance = CodeMirror.fromTextArea(this.codeEl, {
          mode: "text/x-mysql",
          // mode: "javascript",
          lineNumbers: true,
          theme: "monokai",
          matchBrackets: true,
          extraKeys: { 
            'Ctrl': 'autocomplete'
          },
          hintOptions: {  
            completeSingle: false,
            tables: {
              first001: [
                'second001',
                'second002',
                'second003',
                'second004'
              ],
             }
           },
        //    gutters: ["CodeMirror-lint-markers"],
        //    lint: true,
        });
        this.codemirrorInstance.setSize(800,200);
        this.codemirrorInstance.setValue(['console.log("hello CodeMirror");',
        // 'var aaa,bbb,ccc;',
        ].join('\n'));
        // this.codemirrorInstance.setOption('hintOptions', {
        // });
        this.codemirrorInstance.on('keypress', () => {
          // var _this=this;
          //   var options = {
          //     hint: function() {
          //       return {
          //         from: _this.codemirrorInstance.getDoc().getCursor(),
          //           to: _this.codemirrorInstance.getDoc().getCursor(),
          //         list: ['foo', 'bar']
          //       }
          //     }
          //   };
          //   this.codemirrorInstance.showHint(options);
            this.codemirrorInstance.showHint();
        });
        // var orig = CodeMirror.hint.javascript;
        // CodeMirror.hint.javascript = function(cm) {
        //   var inner = orig(cm) || {from: cm.getCursor(), to: cm.getCursor(), list: []};
        //   inner.list.push("bozo");
        //   return inner;
        // };
        console.log(this.codemirrorInstance.options);
    }

    private detached() {
        // this.codemirrorInstance.dispose()
    }
}