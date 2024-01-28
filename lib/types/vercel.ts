export interface VercelProject {
    projects: {
        accountId: string
        analytics?: {
            id: string
            canceledAt: number | null
            disabledAt: number
            enabledAt: number
            paidAt?: number
            sampleRatePercent?: number | null
            spendLimitInDollars?: number | null
        }
        speedInsights?: {
            id: string
            enabledAt?: number
            disabledAt?: number
            canceledAt?: number
            hasData?: boolean
            paidAt?: number
        }
        autoExposeSystemEnvs?: boolean
        autoAssignCustomDomains?: boolean
        autoAssignCustomDomainsUpdatedBy?: string
        buildCommand?: string | null
        commandForIgnoringBuildStep?: string | null
        connectConfigurationId?: string | null
        connectBuildsEnabled?: boolean
        createdAt?: number
        customerSupportCodeVisibility?: boolean
        crons?: {
            /** The time the feature was enabled for this project. Note: It enables automatically with the first Deployment that outputs cronjobs. */
            enabledAt: number
            /** The time the feature was disabled for this project. */
            disabledAt: number | null
            updatedAt: number
            /** The ID of the Deployment from which the definitions originated. */
            deploymentId: string | null
            definitions: {
                /** The hostname that should be used. */
                host: string
                /** The path that should be called for the cronjob. */
                path: string
                /** The cron expression. */
                schedule: string
            }[]
        }
        dataCache?: {
            userDisabled: boolean
            storageSizeBytes?: number | null
            unlimited?: boolean
        }
        devCommand?: string | null
        directoryListing: boolean
        installCommand?: string | null
        env?: {
            target?: ('production' | 'preview' | 'development')[] | ('production' | 'preview' | 'development')
            type: 'secret' | 'system' | 'encrypted' | 'plain' | 'sensitive'
            id?: string
            key: string
            value: string
            configurationId?: string | null
            createdAt?: number
            updatedAt?: number
            createdBy?: string | null
            updatedBy?: string | null
            gitBranch?: string
            edgeConfigId?: string | null
            edgeConfigTokenId?: string | null
            contentHint?:
                | (
                      | {
                            type: 'redis-url'
                            storeId: string
                        }
                      | {
                            type: 'redis-rest-api-url'
                            storeId: string
                        }
                      | {
                            type: 'redis-rest-api-token'
                            storeId: string
                        }
                      | {
                            type: 'redis-rest-api-read-only-token'
                            storeId: string
                        }
                      | {
                            type: 'blob-read-write-token'
                            storeId: string
                        }
                      | {
                            type: 'postgres-url'
                            storeId: string
                        }
                      | {
                            type: 'postgres-url-non-pooling'
                            storeId: string
                        }
                      | {
                            type: 'postgres-prisma-url'
                            storeId: string
                        }
                      | {
                            type: 'postgres-user'
                            storeId: string
                        }
                      | {
                            type: 'postgres-host'
                            storeId: string
                        }
                      | {
                            type: 'postgres-password'
                            storeId: string
                        }
                      | {
                            type: 'postgres-database'
                            storeId: string
                        }
                  )
                | null
            /** Whether `value` is decrypted. */
            decrypted?: boolean
            comment?: string
        }[]
        framework:
            | 'blitzjs'
            | 'nextjs'
            | 'gatsby'
            | 'remix'
            | 'astro'
            | 'hexo'
            | 'eleventy'
            | 'docusaurus-2'
            | 'docusaurus'
            | 'preact'
            | 'solidstart'
            | 'dojo'
            | 'ember'
            | 'vue'
            | 'scully'
            | 'ionic-angular'
            | 'angular'
            | 'polymer'
            | 'svelte'
            | 'sveltekit'
            | 'sveltekit-1'
            | 'ionic-react'
            | 'create-react-app'
            | 'gridsome'
            | 'umijs'
            | 'sapper'
            | 'saber'
            | 'stencil'
            | 'nuxtjs'
            | 'redwoodjs'
            | 'hugo'
            | 'jekyll'
            | 'brunch'
            | 'middleman'
            | 'zola'
            | 'hydrogen'
            | 'vite'
            | 'vitepress'
            | 'vuepress'
            | 'parcel'
            | 'sanity'
            | 'storybook'
        gitForkProtection?: boolean
        gitLFS?: boolean
        id: string
        latestDeployments: {
            alias: string[]
            aliasAssigned?: (number | boolean) | null
            aliasError?: {
                code: string
                message: string
            } | null
            aliasFinal?: string | null
            automaticAliases?: string[]
            builds?: {
                use: string
                src?: string
                dest?: string
            }[]
            connectBuildsEnabled?: boolean
            connectConfigurationId?: string
            createdAt: number
            createdIn: string
            creator: {
                email: string
                githubLogin?: string
                gitlabLogin?: string
                uid: string
                username: string
            } | null
            deploymentHostname: string
            name: string
            forced?: boolean
            id: string
            meta?: { [key: string]: string }
            monorepoManager?: string | null
            plan: 'pro' | 'enterprise' | 'hobby' | 'oss'
            private: boolean
            readyState: 'BUILDING' | 'ERROR' | 'INITIALIZING' | 'QUEUED' | 'READY' | 'CANCELED'
            readySubstate?: 'STAGED' | 'PROMOTED'
            requestedAt?: number
            target?: string | null
            teamId?: string | null
            type: 'LAMBDAS'
            url: string
            userId: string
            withCache?: boolean
            checksConclusion?: 'succeeded' | 'failed' | 'skipped' | 'canceled'
            checksState?: 'registered' | 'running' | 'completed'
            readyAt?: number
            buildingAt?: number
            /** Whether or not preview comments are enabled for the deployment */
            previewCommentsEnabled?: boolean
        }[]
        link?:
            | {
                  org?: string
                  repo?: string
                  repoId?: number
                  type?: 'github'
                  createdAt?: number
                  deployHooks: {
                      createdAt?: number
                      id: string
                      name: string
                      ref: string
                      url: string
                  }[]
                  gitCredentialId?: string
                  updatedAt?: number
                  sourceless?: boolean
                  productionBranch?: string
              }
            | {
                  projectId?: string
                  projectName?: string
                  projectNameWithNamespace?: string
                  projectNamespace?: string
                  projectUrl?: string
                  type?: 'gitlab'
                  createdAt?: number
                  deployHooks: {
                      createdAt?: number
                      id: string
                      name: string
                      ref: string
                      url: string
                  }[]
                  gitCredentialId?: string
                  updatedAt?: number
                  sourceless?: boolean
                  productionBranch?: string
              }
            | {
                  name?: string
                  slug?: string
                  owner?: string
                  type?: 'bitbucket'
                  uuid?: string
                  workspaceUuid?: string
                  createdAt?: number
                  deployHooks: {
                      createdAt?: number
                      id: string
                      name: string
                      ref: string
                      url: string
                  }[]
                  gitCredentialId?: string
                  updatedAt?: number
                  sourceless?: boolean
                  productionBranch?: string
              }
        name: string
        nodeVersion: '20.x' | '18.x' | '16.x' | '14.x' | '12.x' | '10.x' | '8.10.x'
        outputDirectory?: string | null
        passiveConnectConfigurationId?: string | null
        passwordProtection?: { [key: string]: unknown } | null
        productionDeploymentsFastLane?: boolean
        publicSource?: boolean | null
        rootDirectory?: string | null
        serverlessFunctionRegion?: string | null
        skipGitConnectDuringLink?: boolean
        sourceFilesOutsideRootDirectory?: boolean
        ssoProtection?: {
            deploymentType: 'all' | 'preview' | 'prod_deployment_urls_and_all_previews'
        } | null
        targets?: {
            [key: string]: {
                alias?: string[]
                aliasAssigned?: (number | boolean) | null
                aliasError?: {
                    code: string
                    message: string
                } | null
                aliasFinal?: string | null
                automaticAliases?: string[]
                builds?: {
                    use: string
                    src?: string
                    dest?: string
                }[]
                connectBuildsEnabled?: boolean
                connectConfigurationId?: string
                createdAt: number
                createdIn: string
                creator: {
                    email: string
                    githubLogin?: string
                    gitlabLogin?: string
                    uid: string
                    username: string
                } | null
                deploymentHostname: string
                name: string
                forced?: boolean
                id: string
                meta?: { [key: string]: string }
                monorepoManager?: string | null
                plan: 'pro' | 'enterprise' | 'hobby' | 'oss'
                private: boolean
                readyState: 'BUILDING' | 'ERROR' | 'INITIALIZING' | 'QUEUED' | 'READY' | 'CANCELED'
                readySubstate?: 'STAGED' | 'PROMOTED'
                requestedAt?: number
                target?: string | null
                teamId?: string | null
                type: 'LAMBDAS'
                url: string
                userId: string
                withCache?: boolean
                checksConclusion?: 'succeeded' | 'failed' | 'skipped' | 'canceled'
                checksState?: 'registered' | 'running' | 'completed'
                readyAt?: number
                buildingAt?: number
                /** Whether or not preview comments are enabled for the deployment */
                previewCommentsEnabled?: boolean
            } | null
        }
        transferCompletedAt?: number
        transferStartedAt?: number
        transferToAccountId?: string
        transferredFromAccountId?: string
        updatedAt?: number
        live?: boolean
        enablePreviewFeedback?: boolean | null
        permissions?: {
            aliasProject?: unknown
            aliasProtectionBypass?: unknown
            productionAliasProtectionBypass?: unknown
            connectConfigurationLink?: unknown
            dataCacheNamespace?: unknown
            deployment?: unknown
            deploymentCheck?: unknown
            deploymentCheckPreview?: unknown
            deploymentCheckReRunFromProductionBranch?: unknown
            deploymentProductionGit?: unknown
            deploymentPreview?: unknown
            deploymentPrivate?: unknown
            deploymentPromote?: unknown
            deploymentRollback?: unknown
            logs?: unknown
            logsPreset?: unknown
            passwordProtection?: unknown
            job?: unknown
            project?: unknown
            projectAnalyticsSampling?: unknown
            projectDeploymentHook?: unknown
            projectDomain?: unknown
            projectDomainMove?: unknown
            projectDomainCheckConfig?: unknown
            projectEnvVars?: unknown
            projectEnvVarsProduction?: unknown
            projectEnvVarsUnownedByIntegration?: unknown
            projectId?: unknown
            projectIntegrationConfiguration?: unknown
            projectLink?: unknown
            projectMember?: unknown
            projectMonitoring?: unknown
            projectPermissions?: unknown
            projectProductionBranch?: unknown
            projectTransfer?: unknown
            projectTransferOut?: unknown
            projectProtectionBypass?: unknown
            projectUsage?: unknown
            projectAnalyticsUsage?: unknown
            projectSupportCase?: unknown
            projectSupportCaseComment?: unknown
            analytics?: unknown
            trustedIps?: unknown
            webAnalytics?: unknown
            sharedEnvVarConnection?: unknown
            accessGroup?: unknown
            aliasGlobal?: unknown
            analyticsSampling?: unknown
            analyticsUsage?: unknown
            auditLog?: unknown
            billingAddress?: unknown
            billingInformation?: unknown
            billingInvoice?: unknown
            billingInvoiceEmailRecipient?: unknown
            billingInvoiceLanguage?: unknown
            billingPlan?: unknown
            billingPurchaseOrder?: unknown
            billingTaxId?: unknown
            blob?: unknown
            budget?: unknown
            cacheArtifact?: unknown
            cacheArtifactUsageEvent?: unknown
            concurrentBuilds?: unknown
            connect?: unknown
            connectConfiguration?: unknown
            domain?: unknown
            domainAcceptDelegation?: unknown
            domainAuthCodes?: unknown
            domainCertificate?: unknown
            domainCheckConfig?: unknown
            domainMove?: unknown
            domainPurchase?: unknown
            domainRecord?: unknown
            domainTransferIn?: unknown
            event?: unknown
            ownEvent?: unknown
            sensitiveEnvironmentVariablePolicy?: unknown
            fileUpload?: unknown
            gitRepository?: unknown
            ipBlocking?: unknown
            integration?: unknown
            integrationConfiguration?: unknown
            integrationConfigurationTransfer?: unknown
            integrationConfigurationProjects?: unknown
            integrationVercelConfigurationOverride?: unknown
            jobGlobal?: unknown
            logDrain?: unknown
            Monitoring?: unknown
            monitoringQuery?: unknown
            monitoringChart?: unknown
            monitoringAlert?: unknown
            notificationDeploymentFailed?: unknown
            notificationDomainConfiguration?: unknown
            notificationDomainExpire?: unknown
            notificationDomainMoved?: unknown
            notificationDomainPurchase?: unknown
            notificationDomainRenewal?: unknown
            notificationDomainTransfer?: unknown
            notificationDomainUnverified?: unknown
            NotificationMonitoringAlert?: unknown
            notificationPaymentFailed?: unknown
            notificationUsageAlert?: unknown
            notificationCustomerBudget?: unknown
            openTelemetryEndpoint?: unknown
            paymentMethod?: unknown
            permissions?: unknown
            postgres?: unknown
            previewDeploymentSuffix?: unknown
            proTrialOnboarding?: unknown
            seawallConfig?: unknown
            sharedEnvVars?: unknown
            sharedEnvVarsProduction?: unknown
            space?: unknown
            spaceRun?: unknown
            passwordProtectionInvoiceItem?: unknown
            rateLimit?: unknown
            redis?: unknown
            remoteCaching?: unknown
            samlConfig?: unknown
            secret?: unknown
            redisStoreTokenSet?: unknown
            blobStoreTokenSet?: unknown
            postgresStoreTokenSet?: unknown
            supportCase?: unknown
            supportCaseComment?: unknown
            dataCacheBillingSettings?: unknown
            team?: unknown
            teamAccessRequest?: unknown
            teamFellowMembership?: unknown
            teamInvite?: unknown
            teamInviteCode?: unknown
            teamJoin?: unknown
            teamOwnMembership?: unknown
            teamOwnMembershipDisconnectSAML?: unknown
            token?: unknown
            usage?: unknown
            usageCycle?: unknown
            user?: unknown
            userConnection?: unknown
            webAnalyticsPlan?: unknown
            webAuthn?: unknown
            edgeConfig?: unknown
            edgeConfigItem?: unknown
            edgeConfigSchema?: unknown
            edgeConfigToken?: unknown
            webhook?: unknown
            'webhook-event'?: unknown
            endpointVerification?: unknown
            projectTransferIn?: unknown
        }
        lastRollbackTarget?: { [key: string]: unknown } | null
        lastAliasRequest?: {
            fromDeploymentId: string
            toDeploymentId: string
            jobStatus: 'succeeded' | 'failed' | 'skipped' | 'pending' | 'in-progress'
            requestedAt: number
            type: 'promote' | 'rollback'
        } | null
        hasFloatingAliases?: boolean
        protectionBypass?: {
            [key: string]: {
                createdAt: number
                createdBy: string
                scope: 'automation-bypass'
            }
        }
        hasActiveBranches?: boolean
        trustedIps?:
            | (
                  | {
                        deploymentType: 'all' | 'preview' | 'prod_deployment_urls_and_all_previews' | 'production'
                        addresses: {
                            value: string
                            note?: string
                        }[]
                        protectionMode: 'additional' | 'exclusive'
                    }
                  | {
                        deploymentType: 'all' | 'preview' | 'prod_deployment_urls_and_all_previews' | 'production'
                    }
              )
            | null
        gitComments?: {
            /** Whether the Vercel bot should comment on PRs */
            onPullRequest: boolean
            /** Whether the Vercel bot should comment on commits */
            onCommit: boolean
        }
        paused?: boolean
    }[]
    pagination: unknown
}

export interface VercelDomain {
    domains: {
        name: string
        apexName: string
        projectId: string
        redirect?: string | null
        redirectStatusCode?: (307 | 301 | 302 | 308) | null
        gitBranch?: string | null
        updatedAt?: number
        createdAt?: number
        /** `true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed. */
        verified: boolean
        /** A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.[type] = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`. */
        verification?: {
            type: string
            domain: string
            value: string
            reason: string
        }[]
    }[]
}
