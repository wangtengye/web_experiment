function Employee(name,salary){
	this.name=name;
	this.salary=salary;
	this.show=function(){
		console.log('名字：'+this.name +'   薪水：'+this.salary);
	}
}


function Manager(inferiors){
	this.inferiors=inferiors;
	this.getInferiors=function(){
		console.log(this.name+"的下属是：" + this.inferiors);
	}
	
	var employee=new Employee();
	for(var i in employee){
        Manager.prototype[i] = employee[i];
	}
}


function Secretary (superior){
	this.superior=superior;
	this.getSuperior=function(){
		console.log(this.name+"的上司：" + this.superior);
	}
	var employee=new Employee();
	 for(var i in employee){
        Secretary.prototype[i] = employee[i];
	 }
}


console.log('员工');
var e1=new Employee('一',8000);
var e2=new Employee('二',7300);
e1.show();
e2.show();
console.log('');


console.log('经理');
var manager=new Manager(['一','二']);
manager.name='三';
manager.salary='10000';
manager.show();
manager.getInferiors();
console.log('');


console.log('秘书');
var secretary=new Secretary('三');
secretary.name='四';
secretary.salary='5000';
secretary.show();
secretary.getSuperior();
console.log('');