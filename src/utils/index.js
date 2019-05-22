import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'

export function getFileSize(fileByte) {
    let fileSizeByte = fileByte;
    let fileSizeMsg = "";
    if (fileSizeByte < 1024) fileSizeMsg = fileSizeByte.toFixed(2) + " B"
    else if (fileSizeByte === 1024) fileSizeMsg = '1 KB';
    else if (fileSizeByte > 1024 && fileSizeByte < 1048576) fileSizeMsg = (fileSizeByte / 1024).toFixed(2) + " KB";
    else if (fileSizeByte === 1048576) fileSizeMsg = "1 MB";
    else if (fileSizeByte > 1048576 && fileSizeByte < 1073741824) fileSizeMsg = (fileSizeByte / (1024 * 1024)).toFixed(2) + " MB";
    else if (fileSizeByte > 1048576 && fileSizeByte === 1073741824) fileSizeMsg = "1 GB";
    else if (fileSizeByte > 1073741824 && fileSizeByte < 1099511627776) fileSizeMsg = (fileSizeByte / (1024 * 1024 * 1024)).toFixed(2) + " GB";
    else fileSizeMsg = "文件超过1TB";
    return fileSizeMsg;
}

export function getRamSize(ram) {
    let ramMs = ram;
    let ramMsg = "";
    if (ramMs < 1000000) ramMsg = (ramMs / 1000).toFixed(2) + " ms";
    else if (ramMs === 1000000) ramMsg = "1 s";
    else if (ramMs > 1000000 && ramMs < 60000000) ramMsg = (ramMs / (1000 * 1000)).toFixed(2) + " s";
    else if (ramMs > 1000000 && ramMs === 60000000) ramMsg = "1 M";
    else if (ramMs > 60000000 && ramMs < 3600000000) ramMsg = (ramMs / (1000 * 1000 * 60)).toFixed(2) + " M";
    else ramMsg = "资源超过1H";
    return ramMsg;
}

export function getNetSize(netByte) {
    let netSizeByte = netByte;
    let netSizeMsg = "";
    if (netSizeByte < 1024) netSizeMsg = netSizeByte.toFixed(2) + " B"
    else if (netSizeByte === 1024) netSizeMsg = '1 KB';
    else if (netSizeByte > 1024 && netSizeByte < 1048576) netSizeMsg = (netSizeByte / 1024).toFixed(2) + " KB";
    else if (netSizeByte === 1048576) netSizeMsg = "1 MB";
    else if (netSizeByte > 1048576 && netSizeByte < 1073741824) netSizeMsg = (netSizeByte / (1024 * 1024)).toFixed(2) + " MB";
    else if (netSizeByte > 1048576 && netSizeByte === 1073741824) netSizeMsg = "1 GB";
    else if (netSizeByte > 1073741824 && netSizeByte < 1099511627776) netSizeMsg = (netSizeByte / (1024 * 1024 * 1024)).toFixed(2) + " GB";
    else netSizeMsg = "文件超过1TB";
    return netSizeMsg;
}

export function customizedConnect(stateIndex, actions, component) {
    const mapStateToProps = state => {
        return {
            ...state.ironmanObj,
            ...state[stateIndex]
        }
    }
    const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(component)
}

export function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : ((r & 0x3) | 0x8);
        return v.toString(16);
    });
}