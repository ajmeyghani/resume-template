# Simple Resume HTML Template

This is a simple template that I wrote in HTML for myself. It can output your resume to multiple formats including Docx. Make sure that you install [Pandoc](http://pandoc.org/) and [electron-pdf](https://github.com/fraserxu/electron-pdf)

## Usage

- Install Node
- Install Pandoc and electron-pdf: `brew install pandoc && npm i electron-pdf -g`
- Update `src/index.html` and `src/style.css` as you wish
- Build by running `./build.sh` in the root and you should see the outputs in the `dist` folder

## Notes

- In order to personalize the output name, change all the references of `my-name-resume` to whatever you like.
- Pandoc uses the `template.docx` provided as the template for generating the docx format. You can edit it as you wish to output your docx format.


## License

MIT
