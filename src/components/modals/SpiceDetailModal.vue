<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <b-modal
    id="spices_details_modal"
    lazy
    size="lg"
  >
    <template v-slot:modal-title>
      {{spice.title}}
    </template>
    <template v-slot:default>
      <b-container>
        <b-row>
          <b-col>
            <ul style="list-style: none;" class="pl-0">
              <li v-for="(tag, tagName) in spice.tags" :key="tag.id">
                <span><strong>{{ transformTagName(tagName) }}</strong></span> - {{splitTags(tag)}}
              </li>
            </ul>
          </b-col>
          <b-col>
            <img :src="spice.img" alt="" class="img-thumbnail"/>
          </b-col>
        </b-row>

        <h3>Description</h3>
        <div v-html="spice.description" />
      </b-container>
    </template>
    <template v-slot:modal-ok>
      <b-btn
        variant="primary"
        class="add-btn"
        @click="addSpice"
      >Add Spice</b-btn>
    </template>
    <template v-slot:modal-cancel>
      <b-btn variant="secondary" class="dismiss-btn">Dismiss</b-btn>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    spice: {
      type: Object
    }
  },
  methods: {
    transformTagName (tagName) {
      return tagName.toLowerCase().replace(/_/g, ' ')
    },
    splitTags (tags) {
      return tags.join(',')
    },
    addSpice () {
      this.$emit('add-spice', this.spice)
    }
  }
}
</script>
