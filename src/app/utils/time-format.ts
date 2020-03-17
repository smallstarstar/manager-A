const TimeFormat = {
    nowTime() {
        const d = new Date();
        const resDate = `${d.getFullYear()}-${this.isAddZero((d.getMonth() + 1))}-${this.isAddZero(d.getDate())} ${this.isAddZero(d.getHours())}:${this.isAddZero(d.getMinutes())}:${this.isAddZero(d.getSeconds())}`;
        return resDate;
    },
    isAddZero(s: any) {
        return s < 10 ? '0' + s : s
    },
    changeTime(time: any) {
        const d = new Date(time);
        const resDate = `${d.getFullYear()}-${this.isAddZero((d.getMonth() + 1))}-${this.isAddZero(d.getDate())} ${this.isAddZero(d.getHours())}:${this.isAddZero(d.getMinutes())}:${this.isAddZero(d.getSeconds())}`;
        return resDate;
    }
}



export default TimeFormat;