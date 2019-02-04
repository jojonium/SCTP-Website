import requests

PDFfilename = 'table.pdf'
fileData = (PDFfilename, open(PDFfilename, 'rb'))
files = {'f': fileData}
apiKey = "egam5i4wdve4"
fileExt = "csv"
postUrl = "https://pdftables.com/api?key={0}&format={1}".format(apiKey, fileExt)
response = requests.post(postUrl, files=files)
response.raise_for_status()
downloadDir = "data.csv"
with open(downloadDir, "wb") as f:
    f.write(response.content)
