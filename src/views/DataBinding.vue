<template>
    <div>
        <input type="text" v-model="valueText">
        <br>
        <input type="number" v-model.number="valueNumber">
        <br>
        <textarea v-model="message"></textarea>
        <br>
        <div>
            <select v-model="city">
                <option value="1">서울</option>
                <option value="2">부산</option>
            </select>
        </div>
        <br>
        <div>
            <label for="chkSeoul">
                <input type="checkbox" id="chkSeoul" v-model="checked" value="Seoul"> 서울
            </label>
            <label for="chkBusan">
                <input type="checkbox" id="chkBusan" v-model="checked" value="Busan"> 부산
            </label>
            <br>
            <span>체크한 지역 : {{ checked }}</span>
        </div>
        <br>
        <div>
            <label for="radioSeoul">
                <input type="radio" id="radioSeoul" v-bind:value="radioVal1" v-model="picked"> 서울
            </label>
            <label for="radioBusan">
                <input type="radio" id="radioBusan" v-bind:value="radioVal2" v-model="picked"> 부산
            </label>
            <br>
            <span>선택한 지역 : {{ picked }}</span>
            <br>
            <img v-bind:src="imgSrc" />
            <br>
            <div>
                <!-- text를 입력하는 순간 disabled가 풀림 -->
                <input type="text" v-model="textValue" />
                <button type="button" v-bind:disabled="textValue==''">Click</button>
            </div>
            <br>
            <!-- 배열에 클래스를 추가해 사용 가능하지만, 기능별 구분이 나아보임 -->
            <div class="container" v-bind:class="{
                'active': isActive, 'text-red': hasError
            }">Class Binding</div>
            <br>
            <!-- 클래스와 마찬가지로 배열에 추가해 사용 가능하지만, 기능별 구분이 나아보임 -->
            <div v-bind:style="styleObject1">인라인 스타일 바인딩</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                valueText: 'South Korea',
                valueNumber: '7',
                message: 'Textarea Message',
                city: '1',
                checked: [],
                picked: '',
                radioVal1: '서울',
                radioVal2: '부산',
                imgSrc: "https://kr.vuejs.org/images/logo.png",
                textValue: "",
                isActive: true,
                hasError: true,
                styleObject1: {
                    color: 'red',
                    fontSize: '20px'
                }
            };
        },
    }
</script>
<style scoped>
    container {
        width: 100%;
        height: 200px;
    }
    .active {
        background-color: yellow;
        font-weight: bold;
    }
    .text-red{
        color: red;
    }
</style>
