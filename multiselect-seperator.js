/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ({

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(59);


/***/ }),

/***/ 59:
/***/ (function(module, exports) {

/**
 * Multi select seperator js for select the items from dropdown and type seperator between them.
 * 
 * @author Sivaprasad J <sj@lbit.in>
 */

$.fn.multiselectSep = function (options) {

    MULTISELECTSEPERATOR.main.init(this, options);
    MULTISELECTSEPERATOR.method.init();
};

var MULTISELECTSEPERATOR = MULTISELECTSEPERATOR || {};

MULTISELECTSEPERATOR.main = {
    init: function init(SELF_SELECTOR, options) {
        this.createTemplate(SELF_SELECTOR, options);
    },
    createTemplate: function createTemplate(SELF_SELECTOR, options) {

        //Reset the plugin before render
        SELF_SELECTOR.removeClass('muliti-sep-selector');
        SELF_SELECTOR.siblings('.multiselect-seperator').remove();

        //Hide the selector
        SELF_SELECTOR.addClass('muliti-sep-selector');

        // Default options
        var settings = $.extend({
            placeHolder: 'Select',
            defaultSeperator: '',
            previewResult: true,
            previewResultLabel: 'Result will be like :'

        }, options);

        var liOptions = '';

        var uniqueParentId = MULTISELECTSEPERATOR.method.generateUniqueId();

        SELF_SELECTOR.find('option').each(function (i) {
            if ($(this).val()) {

                var dataPreview = $(this).data('multi-sep-preview') != undefined ? $(this).data('multi-sep-preview') : $(this).val();

                dataPreview = $($.parseHTML(dataPreview)).text();

                //Check whether proper string or not
                if (dataPreview != undefined && dataPreview.match(/"/g) != null && dataPreview.match(/"/g).length % 2 !== 0) {

                    dataPreview += "\"";
                }

                liOptions += '<li class="multiselect-seperator-a-tag multiselect-sep-li" data-multi-sep-preview=' + dataPreview + ' data-multi-sep-parent=' + uniqueParentId + ' data-selected=\'false\' data-val="' + $(this).val() + '">' + $(this).text() + '</li>';
            }
        });

        //Check whether the field required or not

        var hiddenInput = '';

        if (SELF_SELECTOR.attr('required') || SELF_SELECTOR.attr('data-required') == 'true') {
            hiddenInput = '<div class="multiselect-sep-hidden-accesible-div"><input  type="text" class="multiselect-sep-hidden-accesible-input multiselect-sep-hidden-accesible-input-' + uniqueParentId + '" name="multi_sep_hidden_required_input-' + uniqueParentId + '" data-field-required="true" required></div>';
            SELF_SELECTOR.removeAttr('required');
            SELF_SELECTOR.attr('data-required', true);
        }

        //Check whether preview the component result enabled or not

        var previewResult = '';
        if (settings.previewResult) {
            previewResult = '<p class="muliti-sep-preview d-none">' + settings.previewResultLabel + ' <span id="multi-sep-preview-' + uniqueParentId + '"></span></p>';
        }

        //Only create html/component if select have a name
        if (SELF_SELECTOR[0] != undefined) {

            //Create the html for componenent with unique id
            var html = '<div class="multiselect-seperator ">' + hiddenInput + '<div class="multiselect-sep-top-div div-grp-' + uniqueParentId + '">' + '<div class="muliti-sep-place-holder" id="muliti-sep-place-holder-' + uniqueParentId + '"><span class="multi-sep-place-holder-span">' + settings.placeHolder + '</span>' + '<span class="muliti-sep-span-select-arrow"></span>' + '</div>' + '<div class="multi-sep-initial-input-div multi-sep-initial-input-div-' + uniqueParentId + ' dspl-show"  > ' + '                    <input type="text"  value="" data-inputName=' + SELF_SELECTOR[0].name + ' data-multi-sep-parent=' + uniqueParentId + ' class="in-field multi-sep-initial-input-field dspl-contents multi-sep-initial-input-' + uniqueParentId + '" style="width:1ch"/>' + '                </div>' + '            </div>' + '            <div class="div-ul muliti-sep-result-inputs" id="div-ul-' + uniqueParentId + '" data-default-sep="' + settings.defaultSeperator + '">' + '                <ul class="multiselect-sep-ul">' + liOptions + '</ul>' + '            </div>' + '            <div id="muliti-sep-result-inputs-' + uniqueParentId + '" class="muliti-sep-result-inputs">' + '            </div></div>' + previewResult + '';

            $(html).insertAfter(SELF_SELECTOR);

            MULTISELECTSEPERATOR.method.showOrHidePlaceHolder(uniqueParentId);

            MULTISELECTSEPERATOR.method.multiSepOnClickDropDown(settings);

            MULTISELECTSEPERATOR.method.multiSepOnClickSelectField();

            MULTISELECTSEPERATOR.method.multiSepPresetSelectedFields(uniqueParentId, SELF_SELECTOR.attr('data-selected-custom'));

            $(document).mouseup(function (e) {
                $menu = $('.multiselect-seperator-a-tag');
                $menu1 = $('.multiselect-sep-ul');
                if (!$menu.is(e.target.parentNode.parentNode) && !$menu1.is(e.target.parentNode)) {
                    $('.div-ul').addClass('muliti-sep-result-inputs');
                }
            });
        }
    }
}, MULTISELECTSEPERATOR.method = {
    init: function init() {
        //
    },
    //Generate unique id
    generateUniqueId: function generateUniqueId() {
        return Math.random().toString(16).slice(2);
    },
    multiSepOnClickDropDown: function multiSepOnClickDropDown(settings) {

        $('.multiselect-seperator-a-tag').unbind('click').bind('click', function ($q) {

            var multiSepParent = $(this).attr('data-multi-sep-parent');

            if ($(this).data('selected') == false) {

                var uniqueId = MULTISELECTSEPERATOR.method.generateUniqueId();

                var seperator = $('#div-ul-' + multiSepParent).attr('data-default-sep');

                if ($(this).attr('data-initial-sep') != undefined) {
                    seperator = $(this).attr('data-initial-sep') != 'null' && $(this).attr('data-initial-sep') != null ? $(this).attr('data-initial-sep') : "";
                }

                var inputDivClass = seperator == "" ? "dspl-show" : "dspl-contents";
                var inputClass = seperator == "" ? "dspl-contents" : "";

                var spanHtml = '<span data-multi-sep-parent=' + multiSepParent + ' class="muliti-sep-span muliti-sep-span-' + multiSepParent + '" data-preview=' + $(this).data('multi-sep-preview') + '  data-val=' + $(this).data('val') + ' data-span-id=' + uniqueId + ' id="parent-span-' + uniqueId + '"><span class="multi-sep-span-close" >x</span>' + $(this).text() + '</span>' + '<div class="input-div ' + inputDivClass + '" id="parent-div-' + uniqueId + '">' + '<input type="text" style="width:' + (parseInt(seperator.length) + 1) + 'ch" value="' + seperator + '" data-multi-sep-parent=' + multiSepParent + ' id="input-' + uniqueId + '" data-inputId=' + uniqueId + ' class="in-field ' + inputClass + '" />' + '</div>';

                $('.div-grp-' + multiSepParent).append(spanHtml);
                $(this).addClass('selected');
                $(this).data('selected', true);
                $(this).attr('data-multi-sep-span-id', uniqueId);
                $(this).attr('id', uniqueId);
            } else {

                $(this).removeClass('selected');
                $(this).data('selected', false);
                var id = $(this).attr('data-multi-sep-span-id');
                $('#parent-span-' + id).remove();
                $('#parent-div-' + id).remove();
                $(this).removeAttr('id');
                $(this).removeAttr('data-multi-sep-span-id');
            }

            MULTISELECTSEPERATOR.method.multiSepDropdownChanged(multiSepParent);

            MULTISELECTSEPERATOR.method.multiSepOnClickInputField();

            MULTISELECTSEPERATOR.method.multiSepOnClickSpan();

            MULTISELECTSEPERATOR.method.multiSepShowInputField();
        });
    },
    multiSepOnClickSelectField: function multiSepOnClickSelectField() {
        $('.multiselect-sep-top-div').unbind('click').bind('click', function (e) {

            var totalLiTags = $(this).siblings('.div-ul').find('ul').find('li').length;

            if (totalLiTags > 0 && $(this).siblings('.div-ul').hasClass('muliti-sep-result-inputs')) {
                $(this).siblings('.div-ul').removeClass('muliti-sep-result-inputs');
            } else {
                $(this).siblings('.div-ul').addClass('muliti-sep-result-inputs');
            }
        });
    },
    /**
     * On click of input field between spans
     */
    multiSepOnClickInputField: function multiSepOnClickInputField() {

        $('.in-field').unbind('keyup').bind('keyup', function (event) {

            if ($(this).val() == "") {
                if ($(this).attr('data-rem') == 1) {
                    //Check if it is inital input or not
                    if ($(this).hasClass('multi-sep-initial-input-field')) {
                        $(this).parent().removeClass('dspl-contents');
                        $(this).parent().addClass('dspl-show');
                        $(this).addClass('dspl-contents');
                    } else {
                        var id = $(this).attr('data-inputId');
                        $('#parent-div-' + id).removeClass('dspl-contents');
                        $('#parent-div-' + id).addClass('dspl-show');
                        $(this).addClass('dspl-contents');
                    }
                } else {
                    $(this).attr('data-rem', 1);
                }
            } else {
                $(this).attr('data-rem', 0);
            }

            $('.dspl-show').click(function () {
                $(this).addClass('dspl-contents');
                $(this).removeClass('dspl-show');
                $(this).find(':input').removeClass('dspl-contents');
            });

            var multiSepParent = $(this).attr('data-multi-sep-parent');

            //Increase the width of input field
            $(this).css('width', $(this).val().length + 1 + 'ch');

            MULTISELECTSEPERATOR.method.multiSepDropdownChanged(multiSepParent);
        });
    },

    /**
     * Click event on span 
     */
    multiSepOnClickSpan: function multiSepOnClickSpan() {

        $('.multi-sep-span-close').unbind('click').bind('click', function () {

            var uniqueId = $(this).parent().data('span-id');

            $('#parent-span-' + uniqueId).remove();
            $('#parent-div-' + uniqueId).remove();

            $('#' + uniqueId).removeClass('selected');
            $('#' + uniqueId).data('selected', false);
            $('#' + uniqueId).removeAttr('id');

            MULTISELECTSEPERATOR.method.multiSepDropdownChanged($(this).parent().attr('data-multi-sep-parent'));
        });
    },

    multiSepShowInputField: function multiSepShowInputField() {
        $('.dspl-show').click(function () {
            $(this).addClass('dspl-contents');
            $(this).removeClass('dspl-show');
            $(this).find(':input').removeClass('dspl-contents');
        });
    },

    multiSepDropdownChanged: function multiSepDropdownChanged(uniqueId) {

        var previewField = '';

        $('#muliti-sep-result-inputs-' + uniqueId).html('');

        var inputName = $('.multi-sep-initial-input-' + uniqueId).attr('data-inputName');

        var i = 0;
        var j = 1;

        //Atleast one drop down should be selected

        if ($('.muliti-sep-span-' + uniqueId).length > 0 && $('.multi-sep-initial-input-' + uniqueId).val()) {

            $('#muliti-sep-result-inputs-' + uniqueId).append('<input class="muliti-sep-input-hidden" name="' + inputName + '[0][isSep]" value="true" /> ');
            $('#muliti-sep-result-inputs-' + uniqueId).append('<input class="muliti-sep-input-hidden" name="' + inputName + '[0][value]" value="' + $('.multi-sep-initial-input-' + uniqueId).val() + '" /> ');
            i = 1;
            j = 2;

            previewField += $('.multi-sep-initial-input-' + uniqueId).val();
        } else {
            $('.multi-sep-initial-input-' + uniqueId).val('');
        }

        $('.muliti-sep-span-' + uniqueId).each(function () {

            var id = $(this).data('span-id');

            var inputField = $('#input-' + id);

            var sepVal = inputField.hasClass('dspl-contents') ? null : inputField.val();

            sepVal = sepVal == null ? " " : sepVal;

            $('#muliti-sep-result-inputs-' + uniqueId).append('<input class="muliti-sep-input-hidden" name="' + inputName + '[' + i + '][isSep]" value="false" /> ');
            $('#muliti-sep-result-inputs-' + uniqueId).append('<input class="muliti-sep-input-hidden" name="' + inputName + '[' + i + '][value]" value="' + $(this).data('val') + '" /> ');
            $('#muliti-sep-result-inputs-' + uniqueId).append('<input class="muliti-sep-input-hidden" name="' + inputName + '[' + j + '][isSep]" value="true" /> ');
            $('#muliti-sep-result-inputs-' + uniqueId).append('<input class="muliti-sep-input-hidden" name="' + inputName + '[' + j + '][value]" value="' + sepVal + '" /> ');

            i = parseInt(j) + 1;
            j = parseInt(i) + 1;

            previewField += $(this).data('preview') + sepVal;
        });

        // Show preview field if it is not empty
        if (previewField != '') {
            $('#multi-sep-preview-' + uniqueId).parent().removeClass('d-none');
            $('#multi-sep-preview-' + uniqueId).text(previewField);
        } else {
            $('#multi-sep-preview-' + uniqueId).parent().addClass('d-none');
        }

        MULTISELECTSEPERATOR.method.showOrHidePlaceHolder(uniqueId);
    },

    //Show or hide place holder when deselect or select the dropdown
    showOrHidePlaceHolder: function showOrHidePlaceHolder(uniqueParentId) {

        var hiddenInputField = $('.multiselect-sep-hidden-accesible-input-' + uniqueParentId);
        var inputValueExist = false;

        if ($('#muliti-sep-result-inputs-' + uniqueParentId + ' input').length) {
            $('#muliti-sep-place-holder-' + uniqueParentId).addClass('muliti-sep-visible-hidden');
            $('.multi-sep-initial-input-div-' + uniqueParentId).removeClass('muliti-sep-ds-none');
            inputValueExist = true;
        } else {
            $('#muliti-sep-place-holder-' + uniqueParentId).removeClass('muliti-sep-visible-hidden');
            $('.multi-sep-initial-input-div-' + uniqueParentId).addClass('muliti-sep-ds-none');
        }

        // Add or remove required attr of hidden input for validation
        if (hiddenInputField.attr('data-field-required') == 'true') {

            if (inputValueExist) {
                hiddenInputField.attr('type', 'hidden').removeAttr('required');
            } else {
                hiddenInputField.attr('type', 'text').prop('required', true);
            }
        }
    },

    //Preset the selected fileds when page load
    multiSepPresetSelectedFields: function multiSepPresetSelectedFields(uniqueParentId, presetFields) {

        //Preset data
        if (presetFields != 'null' && presetFields != "") {

            var selectedFields = JSON.parse(presetFields);

            for (var i = 0; i < selectedFields.length; i++) {

                // In case of seperator before first label
                if (i == 0 && selectedFields[i].isSep == 'true') {

                    var initialInputDiv = $('.multi-sep-initial-input-div-' + uniqueParentId);

                    initialInputDiv.removeClass('dspl-show').addClass('dspl-contents');

                    initialInputDiv.find('input').removeClass('dspl-contents').val(selectedFields[i].value).css('width', selectedFields[i].value.length + 1 + 'ch');
                }

                //In case of not a seperator
                if (selectedFields[i].isSep == 'false') {

                    var dropDownToBeSelect = $('.multiselect-seperator #div-ul-' + uniqueParentId + ' .multiselect-sep-ul').find('[data-val="' + selectedFields[i].value + '"]');

                    //Find the seperator of the current value
                    if (selectedFields[i + 1].isSep) {

                        dropDownToBeSelect.attr('data-initial-sep', selectedFields[i + 1].value == null ? 'null' : selectedFields[i + 1].value);
                    }
                    dropDownToBeSelect.trigger('click');
                }
            }
        }
    }

};

/***/ })

/******/ });