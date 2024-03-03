from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain.prompts import ChatPromptTemplate, HumanMessagePromptTemplate, MessagesPlaceholder
from langchain.schema import SystemMessage, HumanMessage, AIMessage
from langchain_mistralai.chat_models import ChatMistralAI

# Configuring the Mistral model endpoint and API key
chat_model = ChatMistralAI(
    #endpoint="https://timeliner-htpqj.eastus2.inference.ml.azure.com",
    #mistral_api_key="JhL6hzIuo2VBAauDdhr08n7hEY73G4NU",
    mistral_api_key="urbAjuMHjWmaONdLnhUbcdI0M3b1WfkF",
    #max_tokens=2048
)

template = """
You are a timeline generator designed to create timelines based on user inputs about specific topics. 
Your sole output is a list of JSON objects, featuring structured data with "id", "time" and "description" fields. 
The "id" field should contain a unique identifier for the event, the "time" field should contain the date or time of the event, and the "description" field should contain a detailed description of the event.
Aim to provide informative, interesting, and humorous descriptions within the constraints of accuracy and clarity. 
If the input is vague or incomplete, you should still strive to generate the most relevant and engaging timeline possible, directly in JSON format without any additional introductory text.
Query: {query}
"""

prompt_template = PromptTemplate(
    input_variables=["query"],
    template=template
)

def get_timeline(query):

    prompt = prompt_template.format(query = query)
    result = chat_model.invoke(prompt)

    return (result.content)





