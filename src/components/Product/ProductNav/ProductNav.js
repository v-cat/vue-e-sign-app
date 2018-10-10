export default {
  name: 'tabs',
  props: {
    //这里的value是为了可以使用v-model
    value: {
      type: [String, Number]
    }
  },
  data() {
    return {
      //因为不能修改value，所以复制一份自己维护
      currentValue: this.value,
      //用于渲染tabs的标签
      naveList: []
    }
  },

  methods: {
    tabCls: function (item) {
      return [
        'tabs-tab', {
          //给当前选中的tab加一个class
          'tabs-tab-active': item.name === this.currentValue
        }
      ]
    },

    getTabs() {
      //通过遍历子组件得到所有的pane组件
      return this.$children.filter(function (item) {
        return item.$options.name === 'pane';
      });
    },
    updateNav() {
      this.naveList = [];
      //设置对this的引用，在function回调里，this指向的并不是Vue实例
      var _this = this
      this.getTabs().forEach(function (pane, index) {
        _this.naveList.push({
          label: pane.label,
          name: pane.name || index
        });
        if (!pane.name) {
          pane.name = index;
        }
        //如果没有给pane设置name，默认设置他的索引
        if (index === 0) {
          if (!_this.currentValue) {
            _this.currentValue = pane.neme || index
          }
        }
      });
      this.updateStatus();
    },
    updateStatus() {
      var tabs = this.getTabs();
      var _this = this;
      //显示当前选中的tab对应的pane组件，隐藏选中的
      tabs.forEach(function (tab) {
        return tab.show = tab.name === _this.currentValue;
      })
    },
    //点击tab标题时触发
    handleChange: function (index) {
      var nav = this.naveList[index];
      var name = nav.name;
      //改造当前选中的tab，并触发下面的watch
      this.currentValue = name
      //更新value
      this.$emit('input', name);
      //触发一个自定义事件，供父级使用
      this.$emit('on-click', name);
    }
  },


  watch: {
    value: function (val) {
      this.currentValue = val;
    },
    currentValue: function () {
      //在当前选中的tab发生变化时，更新pane的显示状态
      this.updateStatus();
    }
  },
}
