import BuildInPluginState, { BuildInPluginProps, UrlPlaceholder } from '../../BuildInPluginState';
import getDefaultContentEditFeatureSettings from './getDefaultContentEditFeatureSettings';
import OptionsPane from './OptionsPane';
import SidePanePluginImpl from '../SidePanePluginImpl';
import { ExperimentalFeatures } from 'roosterjs-editor-types';
import { SidePaneElementProps } from '../SidePaneElement';

const initialState: BuildInPluginState = {
    pluginList: {
        contentEdit: true,
        hyperlink: true,
        paste: true,
        watermark: false,
        imageEdit: true,
        cutPasteListChain: true,
        tableCellSelection: true,
        tableResize: true,
        customReplace: true,
        pickerPlugin: true,
        resetList: true,
        contextMenu: true,
    },
    contentEditFeatures: getDefaultContentEditFeatureSettings(),
    defaultFormat: {},
    linkTitle: 'Ctrl+Click to follow the link:' + UrlPlaceholder,
    watermarkText: 'Type content here ...',
    forcePreserveRatio: false,
    showRibbon: true,
    supportDarkMode: true,
    experimentalFeatures: [
        ExperimentalFeatures.PasteWithLinkPreview,
        ExperimentalFeatures.SingleDirectionResize,
        ExperimentalFeatures.ImageRotate,
        ExperimentalFeatures.ImageCrop,
        ExperimentalFeatures.AlwaysApplyDefaultFormat,
        ExperimentalFeatures.ConvertSingleImageBody,
        ExperimentalFeatures.TableAlignment,
    ],
    isRtl: false,
};

export default class EditorOptionsPlugin extends SidePanePluginImpl<
    OptionsPane,
    BuildInPluginProps
> {
    constructor() {
        super(OptionsPane, 'options', 'Editor Options');
    }

    getBuildInPluginState(): BuildInPluginState {
        let result: BuildInPluginState;
        this.getComponent(component => (result = component.getState()));
        return result || initialState;
    }

    getComponentProps(base: SidePaneElementProps) {
        return {
            ...initialState,
            ...base,
        };
    }
}
