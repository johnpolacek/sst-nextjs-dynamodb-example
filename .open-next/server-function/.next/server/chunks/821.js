"use strict";exports.id=821,exports.ids=[821],exports.modules={6394:(e,t,n)=>{n.d(t,{O:()=>PutItemCommand});var r=n(8054),i=n(2832),a=n(6919),s=n(3610),o=n(6925);let PutItemCommand=class PutItemCommand extends a.mY{static getEndpointParameterInstructions(){return{UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"}}}constructor(e){super(),this.input=e}resolveMiddleware(e,t,n){this.middlewareStack.use((0,i.p2)(t,this.serialize,this.deserialize)),this.middlewareStack.use((0,r.a3)(t,PutItemCommand.getEndpointParameterInstructions()));let a=e.concat(this.middlewareStack),{logger:o}=t,u={logger:o,clientName:"DynamoDBClient",commandName:"PutItemCommand",inputFilterSensitiveLog:e=>e,outputFilterSensitiveLog:e=>e,[s.zK]:{service:"DynamoDB_20120810",operation:"PutItem"}},{requestHandler:m}=t;return a.resolve(e=>m.handle(e.request,n||{}),u)}serialize(e,t){return(0,o.IQ)(e,t)}deserialize(e,t){return(0,o.E6)(e,t)}}},9189:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(6113),i=n.n(r);let a={randomUUID:i().randomUUID},s=new Uint8Array(256),o=s.length;function rng(){return o>s.length-16&&(i().randomFillSync(s),o=0),s.slice(o,o+=16)}let u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).slice(1));function unsafeStringify(e,t=0){return u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]}function v4(e,t,n){if(a.randomUUID&&!t&&!e)return a.randomUUID();e=e||{};let r=e.random||(e.rng||rng)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return unsafeStringify(r)}let m=v4}};