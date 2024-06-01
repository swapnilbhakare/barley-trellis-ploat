import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api";
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin;
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
import DialogConstructorOptions = powerbiVisualsApi.extensibility.visual.DialogConstructorOptions;
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];
var trellisPlot4B08D4EBA0FB4FF3A8F60412F4EE027A: IVisualPlugin = {
    name: 'trellisPlot4B08D4EBA0FB4FF3A8F60412F4EE027A',
    displayName: 'trellisPlot',
    class: 'Visual',
    apiVersion: '5.1.0',
    create: (options?: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId: string, options: DialogConstructorOptions, initialState: object) => {
        const dialogRegistry = (<any>globalThis).dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["trellisPlot4B08D4EBA0FB4FF3A8F60412F4EE027A"] = trellisPlot4B08D4EBA0FB4FF3A8F60412F4EE027A;
}
export default trellisPlot4B08D4EBA0FB4FF3A8F60412F4EE027A;