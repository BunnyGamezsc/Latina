<script lang="ts">
    import ChevronLeft from "lucide-svelte/icons/chevron-left";
    import ChevronRight from "lucide-svelte/icons/chevron-right";
    import Copy from "lucide-svelte/icons/copy";
    import CreditCard from "lucide-svelte/icons/credit-card";
    import File from "lucide-svelte/icons/file";
    import House from "lucide-svelte/icons/house";
    import ChartLine from "lucide-svelte/icons/chart-line";
    import ListFilter from "lucide-svelte/icons/list-filter";
    import EllipsisVertical from "lucide-svelte/icons/ellipsis-vertical";
    import Package from "lucide-svelte/icons/package";
    import Package2 from "lucide-svelte/icons/package-2";
    import PanelLeft from "lucide-svelte/icons/panel-left";
    import Search from "lucide-svelte/icons/search";
    import Settings from "lucide-svelte/icons/settings";
    import ShoppingCart from "lucide-svelte/icons/shopping-cart";
    import Truck from "lucide-svelte/icons/truck";
    import UsersRound from "lucide-svelte/icons/users-round";
  
    import { Badge } from "$lib/components/ui/badge/index.js";
    import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Pagination from "$lib/components/ui/pagination/index.js";
    import { Progress } from "$lib/components/ui/progress/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import * as Sheet from "$lib/components/ui/sheet/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import CreateCard from "./CreateCard.svelte";
  import GradeReportHomeDetail from "./GradeReportHomeDetail.svelte";
  import { computeLanguage, getLanguageDetails } from "@/utils";





  /*          getLatestSetName              */
  export let setName: string;
  export let percentageCompleted: number;
  export let languageDetails = getLanguageDetails(user.language);
  export let languageName = computeLanguage(user.language);
  export let user: {language:number} = {language: 0}
  </script>
  
  <div class="bg-muted/40 flex min-h-screen w-full flex-col">
    <aside class="bg-background fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r sm:flex">
      <nav class="flex flex-col items-center gap-4 px-2 sm:py-5">
        <a
          href="##"
          class="bg-primary text-primary-foreground group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:h-8 md:w-8 md:text-base"
        >
          <Package2 class="h-4 w-4 transition-all group-hover:scale-110" />
          <span class="sr-only">Acme Inc</span>
        </a>
        <Tooltip.Root>
          <Tooltip.Trigger asChild let:builder>
            <a
              href="##"
              class="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
              use:builder.action
              {...builder}
            >
              <House class="h-5 w-5" />
              <span class="sr-only">Dashboard</span>
            </a>
          </Tooltip.Trigger>
          <Tooltip.Content side="right">Dashboard</Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild let:builder>
            <a
              href="##"
              class="bg-accent text-accent-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
              use:builder.action
              {...builder}
            >
              <ShoppingCart class="h-5 w-5" />
              <span class="sr-only">Orders</span>
            </a>
          </Tooltip.Trigger>
          <Tooltip.Content side="right">Orders</Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild let:builder>
            <a
              href="##"
              class="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
              use:builder.action
              {...builder}
            >
              <Package class="h-5 w-5" />
              <span class="sr-only">Products</span>
            </a>
          </Tooltip.Trigger>
          <Tooltip.Content side="right">Products</Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild let:builder>
            <a
              href="##"
              class="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
              use:builder.action
              {...builder}
            >
              <UsersRound class="h-5 w-5" />
              <span class="sr-only">Customers</span>
            </a>
          </Tooltip.Trigger>
          <Tooltip.Content side="right">Customers</Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild let:builder>
            <a
              href="##"
              class="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
              use:builder.action
              {...builder}
            >
              <ChartLine class="h-5 w-5" />
              <span class="sr-only">Analytics</span>
            </a>
          </Tooltip.Trigger>
          <Tooltip.Content side="right">Analytics</Tooltip.Content>
        </Tooltip.Root>
      </nav>
      <nav class="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip.Root>
          <Tooltip.Trigger asChild let:builder>
            <a
              href="##"
              class="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
              use:builder.action
              {...builder}
            >
              <Settings class="h-5 w-5" />
              <span class="sr-only">Settings</span>
            </a>
          </Tooltip.Trigger>
          <Tooltip.Content side="right">Settings</Tooltip.Content>
        </Tooltip.Root>
      </nav>
    </aside>
    <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header
        class="bg-background sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
      >
        <Sheet.Root>
          <Sheet.Content side="left" class="sm:max-w-xs">
            <nav class="grid gap-6 text-lg font-medium">
              <a
                href="##"
                class="bg-primary text-primary-foreground group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base"
              >
                <Package2 class="h-5 w-5 transition-all group-hover:scale-110" />
                <span class="sr-only">Acme Inc</span>
              </a>
              <a
                href="##"
                class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
              >
                <House class="h-5 w-5" />
                Dashboard
              </a>
              <a href="##" class="text-foreground flex items-center gap-4 px-2.5">
                <ShoppingCart class="h-5 w-5" />
                Orders
              </a>
              <a
                href="##"
                class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
              >
                <Package class="h-5 w-5" />
                Products
              </a>
              <a
                href="##"
                class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
              >
                <UsersRound class="h-5 w-5" />
                Customers
              </a>
              <a
                href="##"
                class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
              >
                <ChartLine class="h-5 w-5" />
                Settings
              </a>
            </nav>
          </Sheet.Content>
        </Sheet.Root>
        <Breadcrumb.Root class="hidden md:flex">
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="##">Dashboard</Breadcrumb.Link>
            </Breadcrumb.Item>
  
          </Breadcrumb.List>
        </Breadcrumb.Root>
        <div class="relative ml-auto flex-1 md:grow-0">
          <Search class="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
          <Input
            type="search"
            placeholder="Search..."
            class="bg-background w-full rounded-lg pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild let:builder>
            <Button
              variant="outline"
              size="icon"
              class="overflow-hidden rounded-full"
              builders={[builder]}
            >
              <img
                src="/images/placeholder-user.jpg"
                width={36}
                height={36}
                alt="Avatar"
                class="overflow-hidden rounded-full"
              />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.Label>My Account</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Settings</DropdownMenu.Item>
            <DropdownMenu.Item>Support</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Logout</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </header>
      <main
        class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3"
      >
        <div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <CreateCard languageName={languageName} languageDetails={languageDetails} setName={setName} percentageCompleted={percentageCompleted}></CreateCard>
          <Tabs.Root value="week">
            <div class="flex items-center">
              <Tabs.List>
                <Tabs.Trigger value="week">Week</Tabs.Trigger>
                <Tabs.Trigger value="month">Month</Tabs.Trigger>
                <Tabs.Trigger value="year">Year</Tabs.Trigger>
              </Tabs.List>
              <div class="ml-auto flex items-center gap-2">
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild let:builder>
                    <Button
                      variant="outline"
                      size="sm"
                      class="h-7 gap-1 text-sm"
                      builders={[builder]}
                    >
                      <ListFilter class="h-3.5 w-3.5" />
                      <span class="sr-only sm:not-sr-only">Filter</span>
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content align="end">
                    <DropdownMenu.Label>Filter by</DropdownMenu.Label>
                    <DropdownMenu.Separator />
                    <DropdownMenu.CheckboxItem checked>
                      Fulfilled
                    </DropdownMenu.CheckboxItem>
                    <DropdownMenu.CheckboxItem>Declined</DropdownMenu.CheckboxItem>
                    <DropdownMenu.CheckboxItem>Refunded</DropdownMenu.CheckboxItem>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
                <Button size="sm" variant="outline" class="h-7 gap-1 text-sm">
                  <File class="h-3.5 w-3.5" />
                  <span class="sr-only sm:not-sr-only">Export</span>
                </Button>
              </div>
            </div>
            <Tabs.Content value="week">
              <Card.Root>
                <Card.Header class="px-7">
                  <Card.Title>Orders</Card.Title>
                  <Card.Description>Recent orders from your store.</Card.Description>
                </Card.Header>
                <Card.Content>
                  <Table.Root>
                    <Table.Header>
                      <Table.Row>
                        <Table.Head>Customer</Table.Head>
                        <Table.Head class="hidden sm:table-cell">
                          Type
                        </Table.Head>
                        <Table.Head class="hidden sm:table-cell">
                          Status
                        </Table.Head>
                        <Table.Head class="hidden md:table-cell">
                          Date
                        </Table.Head>
                        <Table.Head class="text-right">Amount</Table.Head>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      <Table.Row class="bg-accent">
                        <Table.Cell>
                          <div class="font-medium">Liam Johnson</div>
                          <div
                            class="text-muted-foreground hidden text-sm md:inline"
                          >
                            liam@example.com
                          </div>
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell">
                          Sale
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </Table.Cell>
                        <Table.Cell class="hidden md:table-cell">
                          2023-06-23
                        </Table.Cell>
                        <Table.Cell class="text-right">$250.00</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <div class="font-medium">Olivia Smith</div>
                          <div
                            class="text-muted-foreground hidden text-sm md:inline"
                          >
                            olivia@example.com
                          </div>
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell">
                          Refund
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="outline">
                            Declined
                          </Badge>
                        </Table.Cell>
                        <Table.Cell class="hidden md:table-cell">
                          2023-06-24
                        </Table.Cell>
                        <Table.Cell class="text-right">$150.00</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <div class="font-medium">Noah Williams</div>
                          <div
                            class="text-muted-foreground hidden text-sm md:inline"
                          >
                            noah@example.com
                          </div>
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell">
                          Subscription
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </Table.Cell>
                        <Table.Cell class="hidden md:table-cell">
                          2023-06-25
                        </Table.Cell>
                        <Table.Cell class="text-right">$350.00</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <div class="font-medium">Emma Brown</div>
                          <div
                            class="text-muted-foreground hidden text-sm md:inline"
                          >
                            emma@example.com
                          </div>
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell">
                          Sale
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </Table.Cell>
                        <Table.Cell class="hidden md:table-cell">
                          2023-06-26
                        </Table.Cell>
                        <Table.Cell class="text-right">$450.00</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <div class="font-medium">Liam Johnson</div>
                          <div
                            class="text-muted-foreground hidden text-sm md:inline"
                          >
                            liam@example.com
                          </div>
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell">
                          Sale
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </Table.Cell>
                        <Table.Cell class="hidden md:table-cell">
                          2023-06-23
                        </Table.Cell>
                        <Table.Cell class="text-right">$250.00</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <div class="font-medium">Liam Johnson</div>
                          <div
                            class="text-muted-foreground hidden text-sm md:inline"
                          >
                            liam@example.com
                          </div>
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell">
                          Sale
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </Table.Cell>
                        <Table.Cell class="hidden md:table-cell">
                          2023-06-23
                        </Table.Cell>
                        <Table.Cell class="text-right">$250.00</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <div class="font-medium">Olivia Smith</div>
                          <div
                            class="text-muted-foreground hidden text-sm md:inline"
                          >
                            olivia@example.com
                          </div>
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell">
                          Refund
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="outline">
                            Declined
                          </Badge>
                        </Table.Cell>
                        <Table.Cell class="hidden md:table-cell">
                          2023-06-24
                        </Table.Cell>
                        <Table.Cell class="text-right">$150.00</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <div class="font-medium">Emma Brown</div>
                          <div
                            class="text-muted-foreground hidden text-sm md:inline"
                          >
                            emma@example.com
                          </div>
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell">
                          Sale
                        </Table.Cell>
                        <Table.Cell class="hidden sm:table-cell">
                          <Badge class="text-xs" variant="secondary">
                            Fulfilled
                          </Badge>
                        </Table.Cell>
                        <Table.Cell class="hidden md:table-cell">
                          2023-06-26
                        </Table.Cell>
                        <Table.Cell class="text-right">$450.00</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table.Root>
                </Card.Content>
              </Card.Root>
            </Tabs.Content>
          </Tabs.Root>
        </div>
        <div>
          <GradeReportHomeDetail></GradeReportHomeDetail>
        </div>
      </main>
    </div>
  </div>
  