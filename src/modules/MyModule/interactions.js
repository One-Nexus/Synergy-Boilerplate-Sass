export default {
    dismiss: event => event.target.parent(MyModule.config.name).addModifier('hidden')
}