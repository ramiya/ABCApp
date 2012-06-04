
/**
 * This example demonstrates the Carousel component in Sencha Touch 2.
 *
 * The carousel can run both horizontally and vertically, and in this example in combine both
 * of them together.
 *
 * The final result will be 4 horizontal carousels inside 1 vertical carousel.
 * Each of the horizontal carousels will have a category of images within it.
 */
Ext.application({
    //first we define the tablet + phone startup screens and the applicaiton icon url
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    glossOnIcon: true,
    icon: {
        57: 'resources/icons/icon.png',
        72: 'resources/icons/icon@72.png',
        114: 'resources/icons/icon@2x.png',
        144: 'resources/icons/icon@114.png'
    },

    //here we require any components we are using in our application
    requires: [
        'Ext.carousel.Carousel',
        'Ext.Img'
    ],

    /**
     * The launch method is called when the browser is ready and the application is ready to
     * launch.
     */
    launch: function() {
        //first we define each of the categories we have for each one of the horixontal carousels
        //these images can be found inside resources/photos/{category_name}/*
        var alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] ,
   	    uImages =[]	,
	    uItems = [],
	    lImages =[]	,
	    lItems = [],
	    j;

            for (j = 0; j <= alphabets.length; j++) {
		uImages= [];
		lImages= [];	    	
		uImages.push({
                    		xtype: 'image',
		    		width: '60%',
				mode: '',
				src: 'resources/images/uppercase/' + alphabets[j] + '.jpg'
				
			});

		uImages.push({
                    		xtype: 'image',
				mode: '',
				width: '60%',
				src: 'resources/images/pictures/' + alphabets[j] + '.jpg'
			    });

                uItems.push({
                  	xtype: 'panel',
			layout: {
				type: 'hbox',
 				align: 'center',
				pack: 'center'
			},
			items: uImages 
		});

		lImages.push({
                    		xtype: 'image',
		    		width: '60%',
				mode: '',
                    		src: 'resources/images/lowercase/' + alphabets[j] + '.jpg'
				
			});

		lImages.push({
                    		xtype: 'image',
				width: '60%',
				mode: '',
                    		src: 'resources/images/pictures/' + alphabets[j] + '.jpg'
			    });

                lItems.push({
                  	xtype: 'panel',
			layout: {
				type: 'hbox',
 				align: 'center',
				pack: 'stretch'
			},
			items: lImages 
		});
        }
	
	var toolbar = new Ext.Toolbar({
   		docked: 'top',
    		title: 'ABC App'
	});

	var tabPanel = new Ext.TabPanel({	
    		tabBarPosition: 'bottom',
	
		defaults: {
       		 styleHtmlContent: true
    		},

    		items: [
                toolbar,
        	{
            		xtype: 'carousel',
			direction: 'horizontal',
			items: uItems,
			title: 'ABC',
			iconCls: 'icnUpper'
        	},
	        {
            		xtype: 'carousel',
			direction: 'horizontal',
			items: lItems,
			title: 'abc',
            		iconCls: 'icnLower'
        	}

    		]	
	});

	Ext.Viewport.add({
            xtype: 'panel',
	    fullscreen: true,
            items: [tabPanel],
            region : 'center',
	    layout: 'fit',
            scroll: 'vertical'
        });
    }
});
