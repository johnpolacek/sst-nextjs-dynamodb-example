globalThis.openNextDebug = false;globalThis.openNextVersion = "2.2.4";
import{BatchWriteItemCommand as m,DynamoDBClient as d}from"@aws-sdk/client-dynamodb";import{readFileSync as i}from"fs";var u=new d({});async function D(t){switch(t.RequestType){case"Create":case"Update":return l();case"Delete":return p()}}async function l(){let t=i("dynamodb-cache.json","utf8"),r=JSON.parse(t).reduce((e,n,a)=>{let s=Math.floor(a/25);return e[s]=[...e[s]||[],n],e},[]),c=process.env.CACHE_DYNAMO_TABLE,o=r.map(e=>{let n={RequestItems:{[c]:e.map(a=>({PutRequest:{Item:a}}))}};return u.send(new m(n))});return await Promise.all(o),{PhysicalResourceId:"dynamodb-cache",Data:{}}}async function p(){return{PhysicalResourceId:"dynamodb-cache",Data:{}}}export{D as handler};