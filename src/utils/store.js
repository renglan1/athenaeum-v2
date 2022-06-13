import { reactive } from '@vue/composition-api';

const fx = reactive({
    isEnabled: false,
    toggleState(){
        this.isEnabled = !this.isEnabled;
    }
});

const background = reactive({
    name: localStorage.getItem('bgName') ? localStorage.getItem('bgName') : 'neptune',
    quality: localStorage.getItem('bgQuality') ? localStorage.getItem('bgQuality') : 'hd',
    setBackground(name){
        this.name = name;
        localStorage.setItem("bgName", name);
    },
    setQuality(quality){
        this.quality = quality;
        localStorage.setItem("quality", quality);
    },
});

export {fx, background};