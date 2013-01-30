/*
 * File: app/view/PortalPanel.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.PortalPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.portalpanel',

    requires: [
        'MyApp.view.GridPortlet',
        'MyApp.view.SimplePortlet',
        'MyApp.view.ChartPortlet'
    ],

    cls: 'x-portal',
    autoScroll: true,
    layout: {
        type: 'column'
    },
    bodyCls: 'x-portal-body',
    manageHeight: false,

    initComponent: function() {
        var me = this;

        me.addEvents(
            'validatedrop',
            'beforedragover',
            'dragover',
            'beforedrop',
            'drop'
        );

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    columnWidth: 0.33333,
                    cls: 'x-portal-column',
                    layout: {
                        type: 'anchor'
                    },
                    items: [
                        {
                            xtype: 'gridportlet',
                            anchor: '100%'
                        },
                        {
                            xtype: 'simpleportlet',
                            html: '<div class="portlet-content"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed metus nibh \nsodales a, porta at, vulputate eget, dui. Pellentesque ut nisl. Maecenas tortor turpis, interdum non, sodales\nnon, iaculis ac, lacus. Vestibulum auctor, tortor quis iaculis malesuada, libero lectus bibendum purus, sit amet\ntincidunt quam turpis vel lacus. In pellentesque nisl non sem. Suspendisse nunc sem, pretium eget, cursus a, \nfringilla.</p></div>'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    columnWidth: 0.33333,
                    cls: 'x-portal-column',
                    layout: {
                        type: 'anchor'
                    },
                    items: [
                        {
                            xtype: 'simpleportlet',
                            html: '<div class="portlet-content"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed metus nibh \nsodales a, porta at, vulputate eget, dui. Pellentesque ut nisl. Maecenas tortor turpis, interdum non, sodales\nnon, iaculis ac, lacus. Vestibulum auctor, tortor quis iaculis malesuada, libero lectus bibendum purus, sit amet\ntincidunt quam turpis vel lacus. In pellentesque nisl non sem. Suspendisse nunc sem, pretium eget, cursus a, \nfringilla.</p></div>'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    columnWidth: 0.33333,
                    cls: 'x-portal-column',
                    layout: {
                        type: 'anchor'
                    },
                    items: [
                        {
                            xtype: 'chartportlet',
                            anchor: '100%'
                        }
                    ]
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onPanelAfterRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onPanelAfterRender: function(component, eOpts) {
        this.dd = Ext.create('MyApp.view.PortalDropZone', this, this.dropConfig);
    }

});