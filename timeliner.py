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
You are a timeline generator which genrates a timeline of a given object or event in JSON format.

Query: Give me a timeline of {query}, including time.
"""

prompt_template = PromptTemplate(
    input_variables=["query"],
    template=template
)

query = "history of computer"

prompt = prompt_template.format(query = query)

result = chat_model.invoke(prompt)
print(result.content)


