const TextInput = {
    props: {
        name: String,
        type: String,
        label: String,
        placeholder: String,
        required: String,
        min: String,
        max: String,
        value: String,
    },
    template: `
          <div class="mb-3">
            <label :for="name" class="form-label">{{label}}</label>
            <input :type="type"
                   :name="name"
                   :placeholder="placeholder"
                   :required="required"
                   :min="min"
                   :max="max"
                   :autocomplete="name + '-new'"
                   :value="value"
                   class="form-control"
            >
          </div>
        `
}

const SelectInput = {
    data(){
        return {
            addressSameChecked: true
        }
    },
    props: ["items", "name", "required", "label"],
    template: `
      <div class="mb-3">
        <label :for="name" class="form-label">{{label}}</label>
        <select :id="name" class="form-select" :name="name" :required="required">
            <option v-for="option in items" :value="option.value">
              {{option.text}}
            </option>
        </select>
      </div>
    `
}

const CheckInput = {
    props: ["label", "required", "name", "checked"],
    template: `
      <div class="form-check">
          <input type="checkbox" class="form-check-input" :required="required" :value="value" :name="name" :id="name" :checked="checked">
          <label class="form-check-label" :for="name" >
            {{label}}
          </label>
      </div>
    `
}
