<?php

namespace WithCandour\AardvarkSeo\Blueprints\CP;

use WithCandour\AardvarkSeo\Blueprints\Blueprint as AardvarkBlueprint;
use Statamic\Facades\Blueprint as StatamicBlueprint;

class SitemapSettingsBlueprint implements AardvarkBlueprint
{
    /**
     * @inheritDoc
     */
    public static function requestBlueprint()
    {
        return StatamicBlueprint::make()->setContents([
            'sections' => [
                'main' => [
                    'fields' => [
                        [
                            'handle' => 'enable_sitemap',
                            'field' => [
                                'type' => 'toggle',
                                'display' => 'Enable Sitemap?',
                                'default' => true
                            ]
                        ],
                        [
                            'handle' => 'sitemap_cache_expiration',
                            'field' => [
                                'type' => 'select',
                                'display' => 'Sitemap Cache Expiration',
                                'instructions' => 'Set the amount of time before the sitemap should be regenerated.',
                                'default' => '180',
                                'options' => [
                                    'null' => 'Forever',
                                    '60' => '1 Hour',
                                    '180' => '3 Hours',
                                    '720' => '12 Hours',
                                    '1140' => '1 Day',
                                    '10080' => '1 Week',
                                    '40320' => '1 Month',
                                    '120960' => '3 Months',
                                    '483840' => '1 Year'
                                ],
                            ]
                        ],
                        [
                            'handle' => 'exclude_content_section',
                            'field' => [
                                'type' => 'section',
                                'display' => 'Exclude Content',
                                'listable' => 'hidden'
                            ]
                        ],
                        [
                            'handle' => 'exclude_collections',
                            'field' => [
                                'type' => 'collections',
                                'display' => 'Exclude Collections',
                                'instructions' => 'Select collections which you would like to exclude from the sitemap.',
                                'width' => 50
                            ]
                        ],
                        [
                            'handle' => 'exclude_taxonomies',
                            'field' => [
                                'type' => 'taxonomies',
                                'display' => 'Exclude Taxonomies',
                                'instructions' => 'Select taxonomies which you would like to exclude from the sitemap.',
                                'width' => 50
                            ]
                        ]
                    ]
                ]
            ]
        ]);
    }
}
