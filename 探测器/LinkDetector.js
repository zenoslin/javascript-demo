/*
实践-探测器
form：慕课网-JavaScript深入浅出-9.2 by.Bosh
*/
!function(global){
	function DetectorBase(configs){
		if(!this instanceof DetectorBase){
			throw new Error('Do not invoke without new.');
		}
		this.configs = configs;
		this.analyeze();
	}

	DetectorBase.prototype.detect = function(){
		throw new Error('Not implemented');
	};

	DetectorBase.prototype.analyeze = function(){
		console.log('analyzing...');
		this.data = "###data###";
	};

	function LinkDetector(links){
		if(!this instanceof LinkDetector){
			throw new Error('Do not invoke without new.');
		}
		this.links = links;
		DetectorBase.apply(this, arguments);
	}

	function ContainerDetector(containers){
		if(!this instanceof ContainerDetector){
			throw new Error('Do not invoke without new.');
		}
		this.containers = containers;
		DetectorBase.apply(this, arguments);
	}

	//inherit first
	inherit(LinkDetector,DetectorBase);
	inherit(ContainerDetector,DetectorBase);

	//expand later
	LinkDetector.prototype.detect = function(){
		console.log('Loading data:' + this.data);
		console.log('Link detection started.');
		console.log('Scaning links:' + this.links);
	};

	ContainerDetector.prototype.detect = function(){
		console.log('Loading data:' + this.data);
		console.log('Link detection started.');
		console.log('Scaning containers:' + this.containers);
	};

	//prevent from being altered
	Object.freeze(DetectorBase);
	Object.freeze(DetectorBase.prototype);
	Object.freeze(LinkDetector);
	Object.freeze(LinkDetector.prototype);
	Object.freeze(ContainerDetector);
	Object.freeze(ContainerDetector.prototype);

	//export tp global object
	Object.definePropertoes(global,{
		LinkDetector : {value : LinkDetector},
		ContainerDetector : {value : ContainerDetector},
		DetectorBase : {value : DetectorBase},
	});

	function inherit(subClass, superClass){
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
	}

}(this);

var cd = new ContainerDetector('#abc #def #ghi');
var Id = new LinkDetectorw('http://www.taobao.com http://www.tmall.com http://www.baidu.com');

cd.detect();
Id.detect();
