function Employee(name,salary){
	this.name=name;
	this.salary=salary;
	this.show=function(){
		console.log('���֣�'+this.name +'   нˮ��'+this.salary);
	}
}


function Manager(inferiors){
	this.inferiors=inferiors;
	this.getInferiors=function(){
		console.log(this.name+"�������ǣ�" + this.inferiors);
	}
	
	var employee=new Employee();
	for(var i in employee){
        Manager.prototype[i] = employee[i];
	}
}


function Secretary (superior){
	this.superior=superior;
	this.getSuperior=function(){
		console.log(this.name+"����˾��" + this.superior);
	}
	var employee=new Employee();
	 for(var i in employee){
        Secretary.prototype[i] = employee[i];
	 }
}


console.log('Ա��');
var e1=new Employee('һ',8000);
var e2=new Employee('��',7300);
e1.show();
e2.show();
console.log('');


console.log('����');
var manager=new Manager(['һ','��']);
manager.name='��';
manager.salary='10000';
manager.show();
manager.getInferiors();
console.log('');


console.log('����');
var secretary=new Secretary('��');
secretary.name='��';
secretary.salary='5000';
secretary.show();
secretary.getSuperior();
console.log('');