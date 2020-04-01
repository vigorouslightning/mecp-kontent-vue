export default {
  getComponent(type) {
    var parts = type.split('_');
    var final = '';
    parts.forEach (part => {
      part = part.charAt(0).toUpperCase() + part.slice(1);
      final += part;
    });
    return final;
  },
  getWidgetComponent(type) {
    type = this.getComponent(type);
    return type === 'Widget' ? 'GenericWidget' : type;
  }
};
