function Item(n,t,p,d,i){
	var l=0;
	this.name=n;
	this.type=t;
	this.price=p;
	this.date=d;
	this.id=l++;

}
function FPr(n,t,p,d,i,e){
	var l=0;
	this.name=n;
	this.type=t;
	this.price=p;
	this.date=d;
	this.id=l++;
	this.expiry_date=e;
}
FPr.prototype=new Item();
Object.defineProperty(FPr, "shelf", {
	value: 10,
	writable: false
});
function Shop(n, ad, mar, ngood, nam, t, p) {

	this.name=n;
	this.adress=ad;
	this.markup=mar;
	this.income=0;
	this.goods= [];
	for(var i=0; i<ngood; i++)
	{
		this.goods[i]= new Item(nam, t, pr, new Date());
	}
}

