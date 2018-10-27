declare var OWF: any;
declare var Ozone: any;

export class OwfApi {
  private _WidgetStateController: any;

  constructor() { }

  public initialize(): void {
    let self = this;

    this._WidgetStateController = Ozone.state.WidgetState.getInstance({
      widgetEventingController: Ozone.eventing.Widget.getInstance(),
      autoInit: true,

      // this is fired on any event that you are registered for.
      // the msg object tells us what event it was
      onStateEventReceived: function(sender: String, msg) {
        if (msg.eventName === 'beforeclose') {
          self.shutdownWidget(null, null);
        }
      }
    });
    this._WidgetStateController.addStateEventOverrides({
      events: ['beforeclose']
    });
  }

  private shutdownWidget(sender: String, msg): void {
    let self = this;

    // remove listener override to prevent looping
    this._WidgetStateController.removeStateEventOverrides({
      events: ['beforeclose'],
      callback: function() {
        console.log('.. widget shutdown!!');
        // unpublish active track layers
        // self.clearActiveLayers();

        // unsubcribe the events
        // OWF.Eventing.unsubscribe(MAP_STATUS_VIEW);
        // OWF.Eventing.unsubscribe(MAP_FEATURE_UNPLOT);
        // OWF.Eventing.unsubscribe(MAP_OVERLAY_REMOVE);
        // OWF.Eventing.unsubscribe(MAP_MESSAGE_COMPLETE);

        self._WidgetStateController.closeWidget();
      }
    });
  }
}
