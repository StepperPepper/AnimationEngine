

// an animation is for one value create multiple animations for one object
class Animation{
  // NumkeyFrames input(totalnumber of keyFrames) - int value of placement of keyFrame, value of keyFrame
  constructor(name, ...args){
    this.name = name;
    this.KeyFrames = [];
    // for (i in args){
    //   this.KeyFrames.push(args[i]);
    // }
    for (let i = 0; i < args.length; i++){
      this.KeyFrames.push(args[i]);
      console.log(i);
    }
    this.Frames = [];
    this.currFrame = 0;
  }
  PopulateFrames(){
    for (let i = 0; i < this.KeyFrames; i+=2){
      let currFrame;
      let currValue;
      let beforeKeyFrame;
      let beforeValue;
      let diffFrames;
      if (i == 0){
        diffFrames = this.KeyFrames[i];
        currValue = this.KeyFrames[i+1];
        for (let j = 0; j < diffFrames; j++){
          this.Frames.push(currValue/diffFrames);
        }
        
      }
      else {
        beforeKeyFrame = this.KeyFrames[i-2];
        beforeValue = this.KeyFrames[i-1];
        currFrame = this.KeyFrames[i];
        currValue = this.KeyFrames[i+1];
        diffFrames = currFrame - beforeKeyFrame;
        for (let j = 0; j < diffFrames; j++){
          //  (beforeValue + currValue)/diffFrames
          console.log(currValue/diffFrames);
          this.Frames.push(currValue/diffFrames);
        }
      }
    }
  }
}

let A1 = new Animation("A1",10,30,40,100);
