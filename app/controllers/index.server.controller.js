exports.render = function (req, res) {
    res.render('index', {
        name: 'Danielle Campbell',
        title: 'The MEAN Stack',
        definitions: [
        { tech: 'MongoDB', desc: 'A NoSQL database that is an open-source, document-oriented database that stores data in JSON like documnets.' },
        { tech: 'Express', desc: 'A web framework for building we and mobile applications. Written in JavaScript and runs on Node.js runtime environment.' },
        { tech: 'Angular', desc: 'Angular is written in TypeScript and is an open-source framework for building web applications. ' },
        { tech: 'Node.js', desc: 'A runtime environment that allows developers to execute JavaScrip code outside of a web browser. ' }
        ]
    });
};
