<script setup lang="ts">
import type { Member } from '@/interfaces';

interface Props {
  id: number;
}

const props = defineProps<Props>();
const memberList = useState<Map<number, Member>>("memberList");
const member = memberList.value.get(props.id) as Member;

const localNote = computed(
  (): string => {
    let localNote = member.note;
    if(localNote === undefined) {
      localNote = "--";
    }
    return localNote;
  }
);
const pointUp = (): void => {
  member.points++;
}
</script>

<template>
  <section class="box">
    <h4>{{ member.name }}さんの情報</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>メールアドレス</dt>
      <dd>{{ member.email }}</dd>
      <dt>保有ポイント</dt>
      <dd>{{ member.points }}</dd>
      <dt>備考</dt>
      <dd>{{ localNote }}</dd>
    </dl>
    <button v-on:click="pointUp">ポイント加算</button>
  </section>
</template>

<style scoped>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>