<template>
    <div class="appWrapper d-flex flex-column flex-wrap justify-content-center align-items-center">

        <div class="Text">{{$t("topText")}}</div>
        <BIconArrowDown class="arrow"></BIconArrowDown>
        <div class="touchDiv" @pointerdown="touchEvent" @pointermove="touchEvent" @contextmenu="preventDefaultEvent"
            @beforeunload="preventDefaultEvent" @pointerleave="pointerLeaveHandler">
            <!--<div class="textTouchZone"> {{$t("textTouchZone")}}</div>-->
            <table class="table">
                <tbody>
                    <tr>
                        <td>{{ $t("Type") }}</td>
                        <td>{{ eventData.type }}</td>
                    </tr>
                    <tr>
                        <td>{{ $t("Device") }}</td>
                        <td>
                            <BIconMouse2 :class="{ 'selectedDevice': eventData.pointerType === 'mouse' }"></BIconMouse2>
                            <BIconPencil :class="{ 'selectedDevice': eventData.pointerType === 'pen' }"></BIconPencil>
                            <BIconHandIndexThumb :class="{ 'selectedDevice': eventData.pointerType === 'touch' }">
                            </BIconHandIndexThumb>
                        </td>
                    </tr>
                    <tr>
                        <td>{{ $t("Button") }}</td>
                        <td>{{ eventData.button }}</td>
                    </tr>
                    <tr>
                        <td>{{ $t("Position") }}</td>
                        <td>{{ eventData.clientX }} {{ eventData.clientY }}</td>
                    </tr>
                    <tr>
                        <td>{{ $t("Tilt") }}</td>
                        <td>{{ eventData.tiltX }} {{ eventData.tiltY }}</td>
                    </tr>
                    <tr>
                        <td>{{ $t("Pressure") }}</td>
                        <td>{{ eventData.pressure }}</td>
                    </tr>
                </tbody>

            </table>


        </div>
        <!--<div class="Text">{{$t("botText")}}</div>-->

    </div>
</template>


<script>

import { BIconMouse2, BIconPencil, BIconHandIndexThumb,BIconArrowDown } from "bootstrap-icons-vue";
export default {
    name: 'webSerialWrapper',
    data: function () {
        return {
            eventData: {},
            timeout: null
        }
    },
    components: {
        BIconMouse2,
        BIconPencil,
        BIconHandIndexThumb,
        BIconArrowDown
    },
    methods: {
        touchEvent: function (e) {
            clearTimeout(this.timeout);
            e.preventDefault();
            this.eventData = e
        },
        preventDefaultEvent: function (e) {
            e.preventDefault();
        },
        pointerLeaveHandler: function () {
            this.timeout = setTimeout(() => {
                this.eventData = {}
            }, 2000)
        }
    }
}
</script>

<style scoped>
.Text{
    margin: 20px 10px;
    max-width:400px;
}
.arrow{
    margin-bottom: 20px;
    font-size: 2em;
}
.textTouchZone{
    
    padding-bottom: 10px;
}
.touchDiv {
    display: block;
    
    width: 300px;
    height: 300px;
    background-color: lightgray;
    border-radius: 5px;
}

.selectedDevice {
    font-size: 1.4em;
    border-radius: 50%;
    border-color: black;
    border-width: 1px;
    border-style: solid;
    padding: 3px;
}

td {
    width: 50%;
    
}
</style>