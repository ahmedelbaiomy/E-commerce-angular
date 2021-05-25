export class Products {
  constructor(
    public product : string,
    public description:string,
    public photo: string,
    public price:string,
    public createdAt?: Date,
    public category?: string,
    public _id?: string

  ) {}
}

