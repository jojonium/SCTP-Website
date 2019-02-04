import PyPDF2

PDFfilename = "iqp.pdf"

pfr = PyPDF2.PdfFileReader(open(PDFfilename, "rb"))
writer = PyPDF2.PdfFileWriter()

for i in range(86, 104):
    writer.addPage(pfr.getPage(i))

NewPDFfilename = "table.pdf"
with open(NewPDFfilename, "wb") as outputStream:
    writer.write(outputStream)
