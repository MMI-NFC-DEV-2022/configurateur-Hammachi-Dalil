<script setup lang="ts">
import	type { Basket } from '@/types';
import { colors } from '@/types';
import { materiaux } from '@/types';
import { ref } from 'vue';
import SvgProfil from './BasketProfil.vue';
import SvgDessus from './BasketDessus.vue';
import { FormKit }  from "@formkit/vue";

// const chaussure = ref<Basket>({});

const props = defineProps<{
  data?: Basket;
  id?: string;
}>();

const chaussure = ref<Basket>(props.data ?? {});

</script>

<template>
<div class="p-2">

<ul class="flex gap-1">
    <li><a href="#profil">Profil</a></li>
    <li><a href="#dessus">Dessus</a></li>
</ul>

<div class="carousel w-64">
<SvgProfil class="carousel-item w-64" v-bind="chaussure" id="profil" />
<SvgDessus class="carousel-item w-64" v-bind="chaussure" id="dessus"/>
</div>

<FormKit type="form" v-model="chaussure">
    <FormKit name="semelle" label="semelle"  type="radio" :options="colors" :sections-schema="{
        inner: {$el: null},
        decorator: {$el: null},
    }"
    input-class="peer sr-only"
    options-class="flex gap-1" >
        <template #label="context">
            <div
                class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                :style="{ backgroundColor: context.option.value }" 
                />
                <span class="sr-only">{{ context.option.label }}</span>
        </template>
    </FormKit>

    <FormKit name="materiaux" label="Matériaux" type="radio" :options="materiaux" :sections-schema="{
        inner: {$el: null},
        decorator: {$el: null},
    }"
    input-class="peer sr-only"
    options-class="flex gap-1" >
        <template #label="context">
            <div
                class="h-24 w-24 rounded-full border-2 peer-checked:border-red-600 bg-cover"
                :style="{ backgroundImage: `url(${context.option.value})` }" 
                />
                <span class="sr-only">{{ context.option.label }}</span>
        </template>
    </FormKit>
    
    <FormKit name="empeigne" label="empeigne" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{
        inner: {$el: null},
        decorator: {$el: null},
    }"
    input-class="peer sr-only"
    options-class="flex gap-1" >
        <template #label="context">
            <div
                class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                :style="{ backgroundColor: context.option.value }" 
                />
                <span class="sr-only">{{ context.option.label }}</span>
        </template>
    </FormKit>

    <FormKit name="pointe" label="pointe" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{
        inner: {$el: null},
        decorator: {$el: null},
    }"
    input-class="peer sr-only"
    options-class="flex gap-1" >
        <template #label="context">
            <div
                class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                :style="{ backgroundColor: context.option.value }" 
                />
                <span class="sr-only">{{ context.option.label }}</span>
        </template>
    </FormKit>
    
    <FormKit name="oeillet" label="oeillet" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{
        inner: {$el: null},
        decorator: {$el: null},
    }"
    input-class="peer sr-only"
    options-class="flex gap-1" >
        <template #label="context">
            <div
                class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                :style="{ backgroundColor: context.option.value }" 
                />
                <span class="sr-only">{{ context.option.label }}</span>
        </template>
    </FormKit>

    <FormKit name="bande" label="bande" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{
        inner: {$el: null},
        decorator: {$el: null},
    }"
    input-class="peer sr-only"
    options-class="flex gap-1" >
        <template #label="context">
            <div
                class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                :style="{ backgroundColor: context.option.value }" 
                />
                <span class="sr-only">{{ context.option.label }}</span>
        </template>
    </FormKit>

    <FormKit name="languette" label="languette" value="#000000" type="radio" :options="colors" :sections-schema="{
        inner: {$el: null},
        decorator: {$el: null},
    }"
    input-class="peer sr-only"
    options-class="flex gap-1" >
        <template #label="context">
            <div
                class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                :style="{ backgroundColor: context.option.value }" 
                />
                <span class="sr-only">{{ context.option.label }}</span>
        </template>
    </FormKit>

    <FormKit name="lacet" label="lacet" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{
        inner: {$el: null},
        decorator: {$el: null},
    }"
    input-class="peer sr-only"
    options-class="flex gap-1" >
        <template #label="context">
            <div
                class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                :style="{ backgroundColor: context.option.value }" 
                />
                <span class="sr-only">{{ context.option.label }}</span>
        </template>
    </FormKit>

    <FormKit name="trimestre" label="trimestre" value="#FFFFFF" type="radio" :options="colors":sections-schema="{
        inner: {$el: null},
        decorator: {$el: null},
    }"
    input-class="peer sr-only"
    options-class="flex gap-1" >
        <template #label="context">
            <div
                class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                :style="{ backgroundColor: context.option.value }" 
                />
                <span class="sr-only">{{ context.option.label }}</span>
        </template>
    </FormKit>

</FormKit>
</div>
</template>@/types./BasketDessus.vue./BasketProfil.vue