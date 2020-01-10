<?php

namespace App\Listeners;

class BaseSubscriber 
{
    public function subscribe($events) 
    {
        $events->listen('record.list.requested', 'App\Listeners\TableSubscriber@listRequested');        
        
        $events->listen('record.show.requested', 'App\Listeners\TableSubscriber@showRequested');        
        
        $events->listen('record.create.requested', 'App\Listeners\TableSubscriber@createRequested');   
        
        $events->listen('record.edit.requested', 'App\Listeners\TableSubscriber@editRequested');
        
        $events->listen('record.store.requested', 'App\Listeners\TableBeforeTriggerSubscriber@storeRequested');
        $events->listen('record.store.requested', 'App\Listeners\TableSubscriber@storeRequested');
        $events->listen('record.store.success', 'App\Listeners\TableAfterTriggerSubscriber@storeSuccess');
        $events->listen('record.store.success', 'App\Listeners\CacheSubscriber@storeSuccess');
        $events->listen('record.store.success', 'App\Listeners\TableSubscriber@storeSuccess');
        
        $events->listen('record.update.requested', 'App\Listeners\TableBeforeTriggerSubscriber@updateRequested');
        $events->listen('record.update.requested', 'App\Listeners\TableSubscriber@updateRequested');
        $events->listen('record.update.success', 'App\Listeners\TableAfterTriggerSubscriber@updateSuccess');
        $events->listen('record.update.success', 'App\Listeners\CacheSubscriber@updateSuccess');
        $events->listen('record.update.success', 'App\Listeners\TableSubscriber@updateSuccess');
        
        $events->listen('record.clone.requested', 'App\Listeners\TableBeforeTriggerSubscriber@cloneRequested');
        $events->listen('record.clone.requested', 'App\Listeners\TableSubscriber@cloneRequested');
        $events->listen('record.clone.success', 'App\Listeners\TableAfterTriggerSubscriber@cloneSuccess');
        $events->listen('record.clone.success', 'App\Listeners\CacheSubscriber@cloneSuccess');
        
        $events->listen('record.delete.requested', 'App\Listeners\TableBeforeTriggerSubscriber@deleteRequested');
        $events->listen('record.delete.requested', 'App\Listeners\TableSubscriber@deleteRequested');
        $events->listen('record.delete.success', 'App\Listeners\TableAfterTriggerSubscriber@deleteSuccess');
        $events->listen('record.delete.success', 'App\Listeners\CacheSubscriber@deleteSuccess');
        
        $events->listen('record.archive.requested', 'App\Listeners\TableSubscriber@archiveRequested');
        
        $events->listen('record.restore.requested', 'App\Listeners\TableBeforeTriggerSubscriber@restoreRequested');
        $events->listen('record.restore.requested', 'App\Listeners\TableSubscriber@restoreRequested');
        $events->listen('record.restore.success', 'App\Listeners\TableAfterTriggerSubscriber@restoreSuccess');
        $events->listen('record.restore.success', 'App\Listeners\CacheSubscriber@restoreSuccess');
        
        $events->listen('record.deleted.requested', 'App\Listeners\TableSubscriber@deletedRequested');
        
        
        $events->listen('record.selectColummnData.requested', 'App\Listeners\TableSubscriber@selectColumnDataRequested');
        $events->listen('record.realtionTableData.requested', 'App\Listeners\TableSubscriber@realtionTableDataRequested');
        
        
    }
}