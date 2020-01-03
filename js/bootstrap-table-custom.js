/**
 * @author lizhun
 * @email lzhuany@163.com
 * @date 2019/12/31.
 * @description 全局配置
 */
(function ($) {
    'use strict';
    $.fn.bootstrapTable.custom = {
        // 请求相关
        method: 'GET',                      //请求方式（*）
        contentType : "application/x-www-form-urlencoded",
        responseHandler: function(r) {
            return {
                total: r.page.total,
                rows: r.data
            };
        },
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）

        // 排序相关
        sortable: true,                     // 是否启用排序
        sortOrder: "asc",                   // 初始化列排序方式
        sortName: 'id',                     // 初始化排序列
        // rememberOrder: false,            // ??

        // 分页相关
        pagination: true,                   //是否显示分页（*）
        sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
        pageSize: 15,                        //每页的记录行数（*）
        pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
        // showExtendedPagination: false,   // ??

        // 显示相关
        search: true,                        // 是否显示表格搜索
        strictSearch: false,                 // 设置为 true启用全匹配搜索，否则为模糊搜索。
        showRefresh: true,                   // 是否显示刷新按钮
        showColumns: true,                   // 是否显示所有的列（选择显示的列）
        showToggle: true,                    // 是否显示详细视图和列表视图的切换按钮
        cardView: false,                     // 是否显示详细视图
        detailView: false,                   // 是否显示父子表
        showFullscreen: true,                // 是否显示全屏按钮。
        minimumCountColumns: 2,              // 最少允许的列数
        showButtonText: false,               // 是否显示按钮文字
        striped: true,                      //是否隔行变色显示
        toolbar: '#toolbar',                //工具按钮用哪个容器
        icons: {
            paginationSwitchDown: 'fa-caret-square-down',
            paginationSwitchUp: 'fa-caret-square-up',
            refresh: 'fa-refresh',        // 默认fa-sync图标不存在
            toggleOff: 'fa-toggle-off',
            toggleOn: 'fa-toggle-on',
            columns: 'fa-th-list',
            detailOpen: 'fa-plus',
            detailClose: 'fa-minus',
            fullscreen: 'fa-arrows-alt',
            search: 'fa-search',
            clearSearch: 'fa-trash'
        },
        buttonsPrefix: 'btn btn-outline',
        buttonClass: 'primary',

        // 选择相关
        singleSelect: false,                // 设置 true 将禁止多选
        clickToSelect: true,                // 是否启用点击选中行
        // ignoreClickToSelectOn:           // 忽略点击选中
        uniqueId: "id",                     // 每一行的唯一标识，一般为主键列
        idField: 'id',                      // 指定主键列
        selectItemName: 'id',               // radio 或者 checkbox 的字段 name 名。
        checkboxHeader: true,               // 设置 false 将在列头隐藏全选复选框。
        multipleSelectRow: true,            // 选择行，支持 ctrl+click、 shift+click

        // 其他
        //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
    };

    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.custom);

    $.fn.bootstrapTable.custom_column = {
        sortable: false,                     //是否启用排序
        align: 'center',
        valign: 'middle',
        formatter: function (value, row, index) {
            var that = this;
            var type = that.type;
            if (type) {
                switch(type) {
                    case 'no':
                        // 序号
                        return index + 1;
                        break;
                    case 'isEnable':
                        // 状态
                        var type_0 = that.type_0 ? that.type_0 : '冻结';
                        var type_1 = that.type_1 ? that.type_1 : '正常';
                        if (value == '0') {
                            return '<span class="label label-danger">'+ type_0 +'</span>';
                        } else if (value == '1') {
                            return '<span class="label label-primary">'+ type_1 +'</span>';
                        }
                        break;
                    default:
                        break;
                }
            } else {
                return value;
            }
        }
    };
    $.extend($.fn.bootstrapTable.columnDefaults, $.fn.bootstrapTable.custom_column);
})(jQuery);