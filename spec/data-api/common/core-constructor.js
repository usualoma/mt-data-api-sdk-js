describe("DataAPI", function(){

    it("should be called this.loadEndpoints once by default", function(){
        spyOn(MT.DataAPI.prototype, 'loadEndpoints');

        var api = newDataAPI();
        expect(MT.DataAPI.prototype.loadEndpoints).toHaveBeenCalled();
    });

    itWithMt("should be defined api.getEndpointTest by default", function(){
        var api = newDataAPI();
        expect(api.getEndpointTest).toBeDefined();
    });

    it("should be called this.loadEndpoints once when loadPluginEndpoints option is true", function(){
        spyOn(MT.DataAPI.prototype, 'loadEndpoints');
  
        var api = newDataAPI({
            loadPluginEndpoints: true
        });
        expect(MT.DataAPI.prototype.loadEndpoints).toHaveBeenCalled();
    });

    itWithMt("should be defined api.getEndpointTest when loadPluginEndpoints option is true", function(){
        var api = newDataAPI({
            loadPluginEndpoints: true
        });
        expect(api.getEndpointTest).toBeDefined();
    });

    it("should not be defined api.getEndpointTest when loadPluginEndpoints option is false", function() {
        var api = newDataAPI({
            loadPluginEndpoints: false
        });
        expect(api.getEndpointTest).not.toBeDefined();
    });
});
