abstract class TakePhoto{
    constructor(
        cameraMode: string,
        filter: string
    ){}

    abstract getSepia(): void

    getReelTime(): number {
        return 9
    }
}

//const newPhoto = new TakePhoto("test", "test"); // cannot create instance of abstract

class Instagram extends TakePhoto{
    
    constructor(
        camerMode: string,
        filter: string,
        burst: number
    ){
        super(camerMode, filter)
    }
    getSepia(): void {
        console.log("Sepia");
    }
}