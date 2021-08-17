# multi-select-seperator

## Usage
You can use the plugin by import the js ans css files. Then need to initialize the selector with the plugin,

```
$(selector).multiselectSep();
```
## Demo
![custom-plugin (3)](https://user-images.githubusercontent.com/89067530/129688260-dc7611ce-0579-4ced-bb5e-3d99bc582e40.gif)

## Plugin Options
The plugin allows you some options to manage, options can be used by passing when initialize the plugin

#### placeholder
The placeholder option allows you to change the place holder. The default will be Select.

```
$(selector).multiselectSep({
    placeHolder:"Select"
});
```

#### defaultSeperator
The option allows you to change the default seperator showing when select an option. The default will be an empty space.

```
$(selector).multiselectSep({
    defaultSeperator:"-"
});
```

#### previewResult
The preview of the selected items will show below the component. You can enable or disable this feature by pass the previewResult parameter. By default it is True.

```
$(selector).multiselectSep({
    previewResult:false
});
```

#### previewResultLabel
We discussed about the previewResult. This option allows you to change the label of preview. By default it should be "Result will be like :". If you dont want to show the label, please pass the previewResult as empty string. 

```
$(selector).multiselectSep({
    previewResultLabel:""
});
```
