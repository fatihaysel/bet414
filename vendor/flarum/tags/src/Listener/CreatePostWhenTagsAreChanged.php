<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Tags\Listener;

use Flarum\Event\ConfigurePostTypes;
use Flarum\Tags\Event\DiscussionWasTagged;
use Flarum\Tags\Post\DiscussionTaggedPost;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class CreatePostWhenTagsAreChanged
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigurePostTypes::class, [$this, 'addPostType']);
        $events->listen(DiscussionWasTagged::class, [$this, 'whenDiscussionWasTagged']);
    }

    /**
     * @param ConfigurePostTypes $event
     */
    public function addPostType(ConfigurePostTypes $event)
    {
        $event->add(DiscussionTaggedPost::class);
    }

    /**
     * @param DiscussionWasTagged $event
     */
    public function whenDiscussionWasTagged(DiscussionWasTagged $event)
    {
        $post = DiscussionTaggedPost::reply(
            $event->discussion->id,
            $event->actor->id,
            Arr::pluck($event->oldTags, 'id'),
            $event->discussion->tags()->pluck('id')->all()
        );

        $event->discussion->mergePost($post);
    }
}
