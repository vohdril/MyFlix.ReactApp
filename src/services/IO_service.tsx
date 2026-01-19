export class IOService {

    constructor() { }

    public content: string = ''

    onChange(e: any) {
        let file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = this._handleReaderLoaded;
            reader.readAsBinaryString(file);
        }
    };

    _handleReaderLoaded(e: any) {
        this.content = btoa(e.target.result)
        console.log(this.content)
    };

    getFile() {
        return this.content
    }

}