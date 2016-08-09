#!/bin/bash
rm -rf dist
mkdir dist
node ./md.js
electron-pdf ./src/index.html ./dist/my-name-resume.pdf
echo "converted to web-pdf!"
pandoc --template=template.docx -o dist/my-name-resume.docx ./dist/my-name-resume.md
echo "converted to docx!"
# pandoc --template=template.tex -o dist/my-name-resume-text.pdf ./dist/my-name-resume.md
# echo "converted to pdf"
