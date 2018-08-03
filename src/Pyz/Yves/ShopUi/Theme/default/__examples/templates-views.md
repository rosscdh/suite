# TEMPLATES

templates - Templates are "compositions of components", according to a specific graphic layout. They are used to define a visual schema whenever a specific one is shared among more than one page. The main site layout, the checkout layout: these are examples of shared schemas, in which most of the contend is the same, except for the page-specific (or widget-specific) one. A template, therefore, defines the backbone of a series of pages and accomodates the shared components in it, according to the defined layout.

views - Views are the highest point in our structure, the connection point between controllers (backend) and UI. A view extends a template and add its own specific content to it. A view is the only file that can be directly called by backend and represents a page or a widget.
