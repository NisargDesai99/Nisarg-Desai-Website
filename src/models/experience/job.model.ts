export class Job {
	constructor(
		public companyName: string,
		public title: string,
		public role: string[],
		public link: string,
    public toolsUsed: {},
    public toolsUsedList: string[],
		public toolsList: string[],
		public start: Date,
		public end: Date,
	) {

  }
  
  public toString = () : string => {
    console.log("Hello from toString");
    console.log(JSON.stringify(this));
    return JSON.stringify(this);
  }

}
