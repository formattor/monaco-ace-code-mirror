import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js';
// import * as monaco from 'monaco-editor/min/vs/editor/editor.main.js';
// import sqlBuilder from '../../../lib/monaco/sqlBuilder.js';
import distillation from '../../lib/custom-variable.js';

export class Editor {
    public monacoInstance;
    private monacoEl:HTMLDivElement;

    constructor() {
    }

    private attached(): void {
        this.createMonaco();
        monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
            // target:monaco.languages.typescript.ScriptTarget.ES6,
            allowNonTsExtensions:true,
            lib:[]
        })

        // monaco.languages.typescript.javascriptDefaults.addExtraLib(sqlBuilder, '../../../lib/monaco/sqlBuilder.js');
        monaco.languages.typescript.javascriptDefaults.addExtraLib(distillation, '../../../lib/monaco/custom-variable.js');
    }

    private createMonaco() {
        this.monacoInstance = monaco.editor.create(this.monacoEl, {
            value: ['console.log("hello Monaco");',
                // 'var a1,a2,a3,a4;',
                // 'function a5(){',
                // 'console.log("a1");',
                // '};',
            ].join('\n'),
            language: "javascript",
            theme: 'vs-dark',
            minimap: {
                enabled: false,
            },
        })
    }

    private detached() {
        if (this.monacoInstance) {
            this.monacoInstance.dispose();
        }
    }

    private changeModelContent() {
        this.monacoInstance.onDidChangeModelContent((event) => {
            const newValue = this.monacoInstance.getValue();
            console.log(newValue)
        })
    }
}