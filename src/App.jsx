import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return <div id="designer"></div>;
  }

  componentDidMount(){
    console.log('Loading Designer view');

    console.log('Set full screen mode for the designer');
    // @ts-ignore
    var options = new window.Stimulsoft.Designer.StiDesignerOptions();
    options.appearance.fullScreenMode = false;

    console.log('Create the report designer with specified options');
    // @ts-ignore
    var designer = new window.Stimulsoft.Designer.StiDesigner(options, 'StiDesigner', false);

    console.log('Create a new report instance');
    // @ts-ignore
    var report = new window.Stimulsoft.Report.StiReport();

    console.log('Load report from url');
    report.loadFile('reports/SimpleList.mrt');

    console.log('Edit report template in the designer');
    designer.report = report;

    designer.renderHtml("designer");
  }
}

export default App;
