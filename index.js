
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // console.log("started ")
    // const { NodeTracerProvider } = require('@opentelemetry/node');
    // const { SimpleSpanProcessor, ConsoleSpanExporter } = require('@opentelemetry/tracing');
    // const { StackdriverTraceExporter } = require('@opentelemetry/exporter-stackdriver-trace');

    // const provider = new NodeTracerProvider();

    // // Add an exporter for Stackdriver Trace
    // const exporter = new StackdriverTraceExporter({
    //     projectId: 'prj-chng-apps-nft-nprod-1',
    // });

    // // Optionally, you can also export traces to the console for testing
    // const consoleExporter = new ConsoleSpanExporter();
    // console.log("console.")
    // // Use BatchSpanProcessor to batch and send spans to the exporter
    // const spanProcessor = new SimpleSpanProcessor(exporter);
    // provider.addSpanProcessor(spanProcessor);
    // provider.addSpanProcessor(new SimpleSpanProcessor(consoleExporter));

    // provider.register();

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})