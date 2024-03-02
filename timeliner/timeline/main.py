from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain.prompts import ChatPromptTemplate, HumanMessagePromptTemplate, MessagesPlaceholder
from langchain.schema import SystemMessage, HumanMessage, AIMessage
from langchain_mistralai.chat_models import ChatMistralAI

# Configuring the Mistral model endpoint and API key
chat_model = ChatMistralAI(
    endpoint="https://timeliner-htpqj.eastus2.inference.ml.azure.com",
    mistral_api_key="JhL6hzIuo2VBAauDdhr08n7hEY73G4NU",
    max_tokens=2048
)

template = """
You are a timeline generator which genrates a timeline of a given object or activity and give an id for each event in timeline.
Also include any notes and sources used in the result.

Query: Give me a timeline of {query}, output only a JSON object.
Here is an example of the format of the JSON object:
    {{id:1, time: '2000', event: 'Event 1: Lorem ipsum dolor'}},
    {{id:2, time: '2005', event: 'Event 2: Lorem ipsum dolor sit amet, conse'}},
    {{id:3, time: '2010', event: 'Event 3: Lorem ipsum dolor sit amet, consectet'}},
    {{notes: 'any notes'}},
    {{sources: 'any sources}}
Do not include line changes in the output.
"""

prompt_template = PromptTemplate(
    input_variables=["query"],
    template=template
)

def get_timeline(query):

    prompt = prompt_template.format(query = query)
    result = chat_model.invoke(prompt)

    return result.content





