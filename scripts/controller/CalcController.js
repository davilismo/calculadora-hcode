class CalcController {

    constructor(){

            this._locale = 'pt-BR';
            this._displayCalcEl = document.querySelector("#display");
            this._dateEl = document.querySelector("#data");
            this._timeEl = document.querySelector("#hora");
            this._curreentDate;
            this.intialize();
    }

    intialize(){

        this.setDisplayDateTime();

        setInterval (()=> {

           this.setDisplayDateTime();
            
        },  1000 );
         

    }

    setDisplayDateTime(){

        this.displayDate = this.curreentDate.toLocaleDateString(this._locale);
        this.displayTime = this.curreentDate.toLocaleDateString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value) {
        return this._dateEl.innerHTML = value;
    }

    get _displayCalc(){
        return this._displayCalcEl.innerHTML;
    }
}