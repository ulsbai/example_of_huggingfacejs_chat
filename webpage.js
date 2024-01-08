import { HfInference } from "@huggingface/inference";

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
    hf = new HfInference(document.getElementById('token').value.trim() || undefined);
    alert('Constructed HfInference')
  })
  
  document.getElementById('launch').addEventListener('click', async function()
  {
    result = document.getElementById('output').textContent;
    
    for await (output of hf.textGenerationStream({model, inputs: document.getElementById('prompt').value, parameters: {temperature:temperature,top_p:top_p,repetition_penalty:repetition_penalty, top_k: top_k, truncate: truncate, max_new_tokens: max_new_tokens}}, {use_cache: false})) {
        result += output.token.text;
        alert('generated token:' + output.token.text)
    }
  })
})
