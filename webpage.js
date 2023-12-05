//pasted huggingface inference js code pasted from https://cdn.jsdelivr.net/npm/@huggingface/inference@1.7.1/+esm

/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@huggingface/inference@1.7.1/dist/index.mjs
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function e(e){return Array.isArray(e)?e:[e]}function r(e){let r,t,n,s=!1;return function(o){void 0===r?(r=o,t=0,n=-1):r=function(e,r){const t=new Uint8Array(e.length+r.length);return t.set(e),t.set(r,e.length),t}(r,o);const a=r.length;let i=0;for(;t<a;){s&&(10===r[t]&&(i=++t),s=!1);let o=-1;for(;t<a&&-1===o;++t)switch(r[t]){case 58:-1===n&&(n=t-i);break;case 13:s=!0;case 10:o=t}if(-1===o)break;e(r.subarray(i,o),n),i=t,n=-1}i===a?r=void 0:0!==i&&(r=r.subarray(i),t-=i)}}var t=(e=>(e.Length="length",e.EndOfSequenceToken="eos_token",e.StopSequence="stop_sequence",e))(t||{}),n=class{apiKey;defaultOptions;constructor(e="",r={}){this.apiKey=e,this.defaultOptions=r}async fillMask(e,r){const t=await this.request(e,r);if(!(Array.isArray(t)&&t.every((e=>"number"==typeof e.score&&"string"==typeof e.sequence&&"number"==typeof e.token&&"string"==typeof e.token_str))))throw new TypeError("Invalid inference output: output must be of type Array<score: number, sequence:string, token:number, token_str:string>");return t}async summarization(e,r){const t=await this.request(e,r);if(!(Array.isArray(t)&&t.every((e=>"string"==typeof e.summary_text))))throw new TypeError("Invalid inference output: output must be of type Array<summary_text: string>");return t?.[0]}async questionAnswer(e,r){const t=await this.request(e,r);if(!("string"==typeof t.answer&&"number"==typeof t.end&&"number"==typeof t.score&&"number"==typeof t.start))throw new TypeError("Invalid inference output: output must be of type <answer: string, end: number, score: number, start: number>");return t}async tableQuestionAnswer(e,r){const t=await this.request(e,r);if(!("string"==typeof t.aggregator&&"string"==typeof t.answer&&Array.isArray(t.cells)&&t.cells.every((e=>"string"==typeof e))&&Array.isArray(t.coordinates)&&t.coordinates.every((e=>Array.isArray(e)&&e.every((e=>"number"==typeof e))))))throw new TypeError("Invalid inference output: output must be of type <aggregator: string, answer: string, cells: string[], coordinates: number[][]>");return t}async textClassification(e,r){const t=(await this.request(e,r))?.[0];if(!(Array.isArray(t)&&t.every((e=>"string"==typeof e.label&&"number"==typeof e.score))))throw new TypeError("Invalid inference output: output must be of type Array<label: string, score: number>");return t}async textGeneration(e,r){const t=await this.request(e,r);if(!(Array.isArray(t)&&t.every((e=>"string"==typeof e.generated_text))))throw new TypeError("Invalid inference output: output must be of type Array<generated_text: string>");return t?.[0]}async*textGenerationStream(e,r){yield*this.streamingRequest(e,r)}async tokenClassification(r,t){const n=e(await this.request(r,t));if(!(Array.isArray(n)&&n.every((e=>"number"==typeof e.end&&"string"==typeof e.entity_group&&"number"==typeof e.score&&"number"==typeof e.start&&"string"==typeof e.word))))throw new TypeError("Invalid inference output: output must be of type Array<end: number, entity_group: string, score: number, start: number, word: string>");return n}async translation(e,r){const t=await this.request(e,r);if(!(Array.isArray(t)&&t.every((e=>"string"==typeof e.translation_text))))throw new TypeError("Invalid inference output: output must be of type Array<translation_text: string>");return t?.[0]}async zeroShotClassification(r,t){const n=e(await this.request(r,t));if(!(Array.isArray(n)&&n.every((e=>Array.isArray(e.labels)&&e.labels.every((e=>"string"==typeof e))&&Array.isArray(e.scores)&&e.scores.every((e=>"number"==typeof e))&&"string"==typeof e.sequence))))throw new TypeError("Invalid inference output: output must be of type Array<labels: string[], scores: number[], sequence: string>");return n}async conversational(e,r){const t=await this.request(e,r);if(!(Array.isArray(t.conversation.generated_responses)&&t.conversation.generated_responses.every((e=>"string"==typeof e))&&Array.isArray(t.conversation.past_user_inputs)&&t.conversation.past_user_inputs.every((e=>"string"==typeof e))&&"string"==typeof t.generated_text&&Array.isArray(t.warnings)&&t.warnings.every((e=>"string"==typeof e))))throw new TypeError("Invalid inference output: output must be of type <conversation: {generated_responses: string[], past_user_inputs: string[]}, generated_text: string, warnings: string[]>");return t}async featureExtraction(e,r){return await this.request(e,r)}async automaticSpeechRecognition(e,r){const t=await this.request(e,{...r,binary:!0});if(!("string"==typeof t.text))throw new TypeError("Invalid inference output: output must be of type <text: string>");return t}async audioClassification(e,r){const t=await this.request(e,{...r,binary:!0});if(!(Array.isArray(t)&&t.every((e=>"string"==typeof e.label&&"number"==typeof e.score))))throw new TypeError("Invalid inference output: output must be of type Array<label: string, score: number>");return t}async imageClassification(e,r){const t=await this.request(e,{...r,binary:!0});if(!(Array.isArray(t)&&t.every((e=>"string"==typeof e.label&&"number"==typeof e.score))))throw new TypeError("Invalid inference output: output must be of type Array<label: string, score: number>");return t}async objectDetection(e,r){const t=await this.request(e,{...r,binary:!0});if(!(Array.isArray(t)&&t.every((e=>"string"==typeof e.label&&"number"==typeof e.score&&"number"==typeof e.box.xmin&&"number"==typeof e.box.ymin&&"number"==typeof e.box.xmax&&"number"==typeof e.box.ymax))))throw new TypeError("Invalid inference output: output must be of type Array<{label:string; score:number; box:{xmin:number; ymin:number; xmax:number; ymax:number}}>");return t}async imageSegmentation(e,r){const t=await this.request(e,{...r,binary:!0});if(!(Array.isArray(t)&&t.every((e=>"string"==typeof e.label&&"string"==typeof e.mask&&"number"==typeof e.score))))throw new TypeError("Invalid inference output: output must be of type Array<label: string, mask: string, score: number>");return t}async textToImage(e,r){const t=await this.request(e,{...r,blob:!0});if(!(t&&t instanceof Blob))throw new TypeError("Invalid inference output: output must be of type object & of instance Blob");return t}makeRequestOptions(e,r){const t={...this.defaultOptions,...r},{model:n,...s}=e,o={};this.apiKey&&(o.Authorization=`Bearer ${this.apiKey}`),r?.binary||(o["Content-Type"]="application/json"),r?.binary&&(t.wait_for_model&&(o["X-Wait-For-Model"]="true"),!1===t.use_cache&&(o["X-Use-Cache"]="false"),t.dont_load_model&&(o["X-Load-Model"]="0"));return{url:`https://api-inference.huggingface.co/models/${n}`,info:{headers:o,method:"POST",body:r?.binary?e.data:JSON.stringify({...s,options:t}),credentials:r?.includeCredentials?"include":"same-origin"},mergedOptions:t}}async request(e,r){const{url:t,info:n,mergedOptions:s}=this.makeRequestOptions(e,r),o=await fetch(t,n);if(!1!==s.retry_on_error&&503===o.status&&!s.wait_for_model)return this.request(e,{...s,wait_for_model:!0});if(r?.blob){if(!o.ok)throw new Error("An error occurred while fetching the blob");return await o.blob()}const a=await o.json();if(a.error)throw new Error(a.error);return a}async*streamingRequest(e,t){const{url:n,info:s,mergedOptions:o}=this.makeRequestOptions({...e,stream:!0},t),a=await fetch(n,s);if(!1!==o.retry_on_error&&503===a.status&&!o.wait_for_model)return this.streamingRequest(e,{...o,wait_for_model:!0});if(!a.ok){if(a.headers.get("Content-Type")?.startsWith("application/json")){const e=await a.json();if(e.error)throw new Error(e.error)}throw new Error(`Server response contains error: ${a.status}`)}if("text/event-stream"!==a.headers.get("content-type"))throw new Error("Server does not support event stream content type");const i=a.body.getReader(),u=[],y=r(function(e,r,t){let n={data:"",event:"",id:"",retry:void 0};const s=new TextDecoder;return function(o,a){if(0===o.length)t?.(n),n={data:"",event:"",id:"",retry:void 0};else if(a>0){const t=s.decode(o.subarray(0,a)),i=a+(32===o[a+1]?2:1),u=s.decode(o.subarray(i));switch(t){case"data":n.data=n.data?n.data+"\n"+u:u;break;case"event":n.event=u;break;case"id":e(n.id=u);break;case"retry":const t=parseInt(u,10);isNaN(t)||r(n.retry=t)}}}}((()=>{}),(()=>{}),(e=>{u.push(e)})));try{for(;;){const{done:e,value:r}=await i.read();if(e)return;for(y(r);u.length>0;){const e=u.shift();e.data.length>0&&(yield JSON.parse(e.data))}}}finally{i.releaseLock()}}};//K removed >export{n as HfInference,t as TextGenerationStreamFinishReason};export default null;
//# sourceMappingURL=/sm/721c31f9e686bfb48c59d6da91fe38efa3f5fd34e385846dcd46b18a7e45304d.map

const model = 'OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5';

const temperature = 0.9;
const top_p = 0.95;
const repetition_penalty = 1.2;
const top_k = 50;
const truncate = 1024;
const max_new_tokens = 2000;

let hf = null;

window.addEventListener('load', function(){
  document.getElementById('construct_HfInference').addEventListener('click', function()
  {
    hf = new n(document.getElementById('token').value.trim() || undefined); // n exported as HfInference
  })
  
  document.getElementById('launch').addEventListener('click', async function()
  {
    result = document.getElementById('output').textContent;
    
    for await (output of hf.textGenerationStream({model, inputs: prompt, parameters: {temperature:temperature,top_p:top_p,repetition_penalty:repetition_penalty, top_k: top_k, truncate: truncate, max_new_tokens: max_new_tokens}}, {use_cache: false})) {
        result += output.token.text;
    }
  })
})
